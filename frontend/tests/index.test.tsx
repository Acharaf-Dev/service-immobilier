import { render, screen } from '@testing-library/react'
import Home from '../pages/index'

test('renders welcome text', () => {
  render(<Home />)
  const linkElement = screen.getByText(/Bienvenue sur Service Immobilier/i)
  expect(linkElement).toBeInTheDocument()
})
