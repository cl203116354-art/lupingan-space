import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import App from './App'

describe('Lupingan Space', () => {
  it('renders the requested navigation and sections', () => {
    render(<App />)

    expect(screen.getByRole('link', { name: '角色介绍' })).toHaveAttribute(
      'href',
      '#character',
    )
    expect(screen.getByRole('heading', { name: /I'M 鹭平安/ })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /影像与表情/ })).toBeInTheDocument()
  })

  it('uses split text animation hooks in the hero copy', () => {
    render(<App />)

    expect(
      screen.getByRole('heading', { name: /鹭平安 Lupingan Space/ }),
    ).toHaveClass('split-heading')
    expect(document.querySelectorAll('.hero-content .split-parent')).toHaveLength(4)
  })

  it('renders the interactive ribbons layer behind the hero copy', () => {
    const { container } = render(<App />)

    expect(container.querySelector('.hero-ribbons .ribbons-container')).toBeInTheDocument()
    expect(container.querySelector('.hero-ribbons')).toHaveAttribute('aria-hidden', 'true')
  })

  it('renders the poster-style character introduction', () => {
    render(<App />)

    expect(screen.getByText('HELLO!')).toBeInTheDocument()
    expect(screen.getByText('一路平安')).toBeInTheDocument()
    expect(screen.getByText('平安守护')).toBeInTheDocument()
    expect(screen.getByText('景区巡逻')).toBeInTheDocument()
    expect(screen.getByText('反诈宣传')).toBeInTheDocument()
    expect(screen.getByText('互动陪伴')).toBeInTheDocument()
  })

  it('changes the character response when a control is pressed', () => {
    render(<App />)

    fireEvent.click(screen.getByRole('button', { name: '收到' }))

    expect(screen.getByRole('status')).toHaveTextContent('收到')
    expect(screen.getByRole('img', { name: '鹭平安回应：收到' })).toBeInTheDocument()
  })
})
