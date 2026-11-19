// @vitest-environment jsdom
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Home from '../../pages/Home.tsx'

describe('Home', () => {
  it('renders the home page text', () => {
    // Arrange
    const expectedHeadingOne = 'Kia Ora'

    // Act
    render(<Home />)

    // Assert
    const headingOne = screen.getByText(expectedHeadingOne, { exact: true })
    expect(headingOne.tagName).toBe('H1')
  })
})
