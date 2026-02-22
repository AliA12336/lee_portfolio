import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { AboutPage, TestIds } from "../src/pages/AboutPage"

describe('AboutPage', () => {
  it('renders', () => {
    render(<AboutPage />)
    
    const header = screen.getByTestId(TestIds.header)
    const bioPic = screen.getByTestId(TestIds.bioPic)
    const about = screen.getByTestId(TestIds.about)
    const separator = screen.getByTestId(TestIds.separator)
    
     expect(header).toBeInTheDocument()
    expect(bioPic).toBeInTheDocument()  
    expect(about).toBeInTheDocument()
    expect(separator).toBeInTheDocument()
    })

    it('renders the biopic with correct src and alt', () => {
        render(<AboutPage />)

        const bioPic = screen.getByTestId(TestIds.bioPic)
        expect(bioPic).toHaveAttribute('src', '/src/assets/images/DSC_9635.jpg')
        expect(screen.getByAltText('Lee Adams')).toBeInTheDocument()
    })
})
