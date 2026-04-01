import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import StatsBar from './StatsBar'

describe('StatsBar Component', () => {
  it('renders all four statistics correctly', () => {
    render(<StatsBar />)
    expect(screen.getByText('2,400+')).toBeInTheDocument()
    expect(screen.getByText('48h')).toBeInTheDocument()
    expect(screen.getByText('98%')).toBeInTheDocument()
    expect(screen.getByText('12')).toBeInTheDocument()
    expect(screen.getByText('Placements Made')).toBeInTheDocument()
    expect(screen.getByText('Shortlist Delivery')).toBeInTheDocument()
    expect(screen.getByText('Retention Rate')).toBeInTheDocument()
    expect(screen.getByText('Industry Verticals')).toBeInTheDocument()
  })

  it('renders with the correct background color', () => {
    const { container } = render(<StatsBar />)
    const section = container.querySelector('section')
    expect(section).toHaveClass('bg-black')
  })
})
