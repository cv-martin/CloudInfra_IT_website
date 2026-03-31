import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import StatsBar from './StatsBar'

describe('StatsBar Component', () => {
  it('renders all four statistics correctly', () => {
    render(<StatsBar />)
    
    // Check for the values
    expect(screen.getByText('2,400+')).toBeInTheDocument()
    expect(screen.getByText('48h')).toBeInTheDocument()
    expect(screen.getByText('98%')).toBeInTheDocument()
    expect(screen.getByText('HIPAA+')).toBeInTheDocument()
    
    // Check for the labels
    expect(screen.getByText('Professionals Placed')).toBeInTheDocument()
    expect(screen.getByText('Avg. Time-to-Shortlist')).toBeInTheDocument()
    expect(screen.getByText('Client Retention')).toBeInTheDocument()
    expect(screen.getByText('Compliance Ready')).toBeInTheDocument()
  })

  it('renders with the correct background color', () => {
    const { container } = render(<StatsBar />)
    const section = container.querySelector('section')
    expect(section).toHaveClass('bg-[#06B6D4]')
  })
})
