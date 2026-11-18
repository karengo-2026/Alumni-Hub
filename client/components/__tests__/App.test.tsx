// @vitest-environment jsdom
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from '../App'

describe('App', () => {
  it('renders the app page text', () => {
    // Arrange
    const expectedHeadingOne = 'Fullstack Boilerplate - with Fruits!'
    const expectedHeadingTwo = 'Heading 2'
    const expectedHeadingThree = 'Heading 3'
    const expectedHeadingFour = 'Heading 4'

    // Act
    render(<App />)

    // Assert
    const headingOne = screen.getByText(expectedHeadingOne, { exact: true })
    expect(headingOne.tagName).toBe('H1')

    const headingTwo = screen.getByText(expectedHeadingTwo, { exact: true })
    expect(headingTwo.tagName).toBe('H2')

    const headingThree = screen.getByText(expectedHeadingThree, { exact: true })
    expect(headingThree.tagName).toBe('H3')

    const headingFour = screen.getByText(expectedHeadingFour, {exact: true})
    expect(headingFour.tagName).toBe('H4')
  })
})
