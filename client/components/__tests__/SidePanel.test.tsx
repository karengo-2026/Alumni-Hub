// @vitest-environment jsdom
import { afterEach, expect, test, vi } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'
import type { Resource } from '../../../models/resource.ts'
import SidePanel from '../SidePanel.tsx'
import userEvent from '@testing-library/user-event'

afterEach(cleanup)

test('embeds a YouTube resource in the preview panel', () => {
  const resource: Resource = {
    id: 1,
    unitId: 6,
    type: 'Guide',
    title: 'Custom hooks',
    url: 'https://www.youtube.com/watch?v=abcdefghijk',
    addedBy: null,
    description: null,
  }

  render(<SidePanel resource={resource} onClose={vi.fn()} />)

  const player = screen.getByTitle('Video: Custom hooks')

  expect(player.tagName).toBe('IFRAME')
  expect(player.getAttribute('src')).toBe(
    'https://www.youtube.com/embed/abcdefghijk',
  )
})

test('embeds a handbook reading and keeps its original link', () => {
  const resource: Resource = {
    id: 2,
    unitId: 6,
    type: 'Guide',
    title: 'Deployment guide',
    url: 'https://student-handbook.devacademy.life/guides/deploying',
    addedBy: null,
    description: null,
  }

  render(<SidePanel resource={resource} onClose={vi.fn()} />)

  const reading = screen.getByTitle('Reading: Deployment guide')

  expect(reading.tagName).toBe('IFRAME')
  expect(reading.getAttribute('src')).toBe(resource.url)

  const originalLink = screen.getByRole('link', {
    name: 'Open original resource (new tab)',
  })

  expect(originalLink.getAttribute('href')).toBe(resource.url)
  expect(originalLink.getAttribute('target')).toBe('_blank')
})

test('calls onClose when the shared Close button is clicked', async () => {
  const user = userEvent.setup()
  const onClose = vi.fn()

  const resource: Resource = {
    id: 3,
    unitId: null,
    type: 'Docs',
    title: 'Example resource',
    url: 'https://example.com',
    addedBy: null,
    description: null,
  }

  render(<SidePanel resource={resource} onClose={onClose} />)

  await user.click(screen.getByRole('button', { name: 'Close' }))

  expect(onClose).toHaveBeenCalledTimes(1)
})

test.each([
  ['video', 'https://www.youtube.com/watch?v=abcdefghijk'],
  ['reading', 'https://student-handbook.devacademy.life/guides/deploying'],
])('calls onClose when Escape is pressed for a %s', async (_kind, url) => {
  const user = userEvent.setup()
  const onClose = vi.fn()

  const resource: Resource = {
    id: 4,
    unitId: 6,
    type: 'Guide',
    title: 'Preview resource',
    url,
    addedBy: null,
    description: null,
  }

  render(<SidePanel resource={resource} onClose={onClose} />)

  await user.keyboard('{Escape}')

  expect(onClose).toHaveBeenCalledTimes(1)
})
