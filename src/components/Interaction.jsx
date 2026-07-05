import { useState } from 'react'
import { responses } from '../content'

export default function Interaction() {
  const [activeId, setActiveId] = useState(responses[0].id)
  const active = responses.find((response) => response.id === activeId) ?? responses[0]

  return (
    <section
      className={`interaction section response-${active.id}`}
      id="interaction"
      aria-labelledby="interaction-title"
    >
      <div className="interaction-orb" aria-hidden="true" />
      <div className="interaction-layout shell">
        <div className="interaction-copy reveal">
          <h2 id="interaction-title">鹭平安回应机</h2>
          <p>选一句你现在想听的话，看看今天值班的鹭平安怎么回答。</p>

          <div className="response-controls" aria-label="选择鹭平安回应">
            {responses.map((response) => (
              <button
                className={response.id === active.id ? 'is-active' : ''}
                key={response.id}
                type="button"
                aria-pressed={response.id === active.id}
                onClick={() => setActiveId(response.id)}
              >
                {response.label}
              </button>
            ))}
          </div>
        </div>

        <div className="response-stage glass reveal">
          <div className="response-image">
            <img
              key={active.src}
              src={active.src}
              alt={`鹭平安回应：${active.label}`}
            />
          </div>
          <p role="status">
            <strong>{active.label}</strong>
            <span>{active.message}</span>
          </p>
        </div>
      </div>
    </section>
  )
}
