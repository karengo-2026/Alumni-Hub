// @vitest-environment jsdom
import { afterEach, expect, test, vi } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import type { Resource } from '../../../models/resource.ts'
import ResourceList from '../ResourceList.tsx'

afterEach(cleanup)

test('opens a preview for a YouTube link regardless of resource type', async () => {
  const user = userEvent.setup()
  const onPreview = vi.fn()

  const resource: Resource = {
    id: 1,
    unitId: 6,
    type: 'Docs',
    title: 'Custom hooks video',
    url: 'https://www.youtube.com/watch?v=abcdefghijk',
    addedBy: null,
    description: null,
  }

  render(<ResourceList resources={[resource]} onPreview={onPreview} />)

  await user.click(screen.getByRole('button', { name: 'Custom hooks video' }))

  expect(onPreview).toHaveBeenCalledTimes(1)
  expect(onPreview).toHaveBeenCalledWith(resource)
})

test('renders an ordinary resource as an external link', () => {
  const onPreview = vi.fn()

  const resource: Resource = {
    id: 2,
    unitId: null,
    type: 'Docs',
    title: 'Example documentation',
    url: 'https://example.com/docs',
    addedBy: null,
    description: null,
  }

  render(<ResourceList resources={[resource]} onPreview={onPreview} />)

  const link = screen.getByRole('link', {
    name: 'Example documentation',
  })

  expect(link.getAttribute('href')).toBe(resource.url)
  expect(link.getAttribute('target')).toBe('_blank')
  expect(link.getAttribute('rel')).toBe('noopener noreferrer')

  expect(
    screen.queryByRole('button', { name: 'Example documentation' }),
  ).toBeNull()
})
