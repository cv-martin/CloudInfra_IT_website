import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import VisaTrustBand from './VisaTrustBand'

describe('VisaTrustBand Component', () => {
  it('renders correctly with the "US Work Authorization" label', () => {
    render(<VisaTrustBand />)
    expect(screen.getByText('US Work Authorization')).toBeInTheDocument()
  })

  it('renders all supported visa types', () => {
    render(<VisaTrustBand />)
    const expectedVisas = ['H-1B', 'OPT (F-1)', 'STEM OPT', 'Green Card', 'LPR', 'US Citizen']
    
    expectedVisas.forEach(visa => {
      expect(screen.getByText(visa)).toBeInTheDocument()
    })
  })

  it('has the correct background and border classes', () => {
    const { container } = render(<VisaTrustBand />)
    const div = container.querySelector('div')
    expect(div).toHaveClass('bg-[#000000]')
    expect(div).toHaveClass('border-t')
    expect(div).toHaveClass('border-white/5')
  })
})
