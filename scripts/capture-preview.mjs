import { writeFile } from 'node:fs/promises'

const width = Number(process.argv[2] ?? 1600)
const height = Number(process.argv[3] ?? 1200)
const output = process.argv[4] ?? 'preview.png'
const scrollY = Number(process.argv[5] ?? 0)
const pageUrl = process.argv[6] ?? 'http://127.0.0.1:4173/'
const selector = process.argv[7]

const targets = await fetch('http://127.0.0.1:9222/json').then((response) => response.json())
const target = targets.find((item) => item.url === pageUrl)

if (!target) {
  throw new Error('Preview page was not found in the Edge debug session.')
}

const socket = new WebSocket(target.webSocketDebuggerUrl)
let messageId = 0
const pending = new Map()
const diagnostics = []

socket.addEventListener('message', (event) => {
  const message = JSON.parse(event.data)
  if (message.method === 'Runtime.exceptionThrown') {
    diagnostics.push(message.params.exceptionDetails.text)
    diagnostics.push(message.params.exceptionDetails.exception?.description)
  }
  if (message.method === 'Log.entryAdded') {
    diagnostics.push(message.params.entry.text)
  }
  if (message.id && pending.has(message.id)) {
    pending.get(message.id)(message)
    pending.delete(message.id)
  }
})

await new Promise((resolve, reject) => {
  socket.addEventListener('open', resolve, { once: true })
  socket.addEventListener('error', reject, { once: true })
})

function send(method, params = {}) {
  const id = ++messageId
  socket.send(JSON.stringify({ id, method, params }))
  return new Promise((resolve) => pending.set(id, resolve))
}

await send('Runtime.enable')
await send('Log.enable')
await send('Emulation.setDeviceMetricsOverride', {
  width,
  height,
  deviceScaleFactor: 1,
  mobile: width < 768,
})
await send('Page.reload', { ignoreCache: true })
await new Promise((resolve) => setTimeout(resolve, 2500))
await send('Runtime.evaluate', {
  expression: `window.scrollTo({ top: ${scrollY}, behavior: 'instant' })`,
})
await new Promise((resolve) => setTimeout(resolve, 500))

const state = await send('Runtime.evaluate', {
  expression: `({
    title: document.title,
    text: document.body.innerText.slice(0, 300),
    root: document.querySelector('#root')?.innerHTML.slice(0, 120),
    viewport: window.innerWidth,
    scrollWidth: document.documentElement.scrollWidth,
    height: document.documentElement.scrollHeight
  })`,
  returnByValue: true,
})

let captureOptions = {
  format: 'png',
  captureBeyondViewport: false,
}

if (selector) {
  const bounds = await send('Runtime.evaluate', {
    expression: `(() => {
      const rect = document.querySelector(${JSON.stringify(selector)}).getBoundingClientRect()
      return {
        x: rect.left + window.scrollX,
        y: rect.top + window.scrollY,
        width: rect.width,
        height: rect.height
      }
    })()`,
    returnByValue: true,
  })
  captureOptions = {
    format: 'png',
    captureBeyondViewport: true,
    clip: {
      ...bounds.result.result.value,
      scale: 1,
    },
  }
}

const screenshot = await send('Page.captureScreenshot', captureOptions)

if (!screenshot.result?.data) {
  throw new Error(`Screenshot capture failed: ${JSON.stringify(screenshot)}`)
}

await writeFile(output, Buffer.from(screenshot.result.data, 'base64'))
console.log(JSON.stringify(state.result.result.value))
if (diagnostics.length) {
  console.log(JSON.stringify(diagnostics.filter(Boolean)))
}
socket.close()
