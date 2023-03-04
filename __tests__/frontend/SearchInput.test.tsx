import { render, screen } from '@testing-library/react'
import SearchInput from '../../src/frontend/components/ui/Input/SearchInput'
import '@testing-library/jest-dom'

describe('SearchInput', () => {
  it('renders a heading', () => {
    render(<SearchInput />)

    const input = screen.getByPlaceholderText('Rechercher')

    expect(input).toBeInTheDocument()
  })
  
})