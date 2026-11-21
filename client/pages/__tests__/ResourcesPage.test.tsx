// @vitest-environment jsdom
import { afterEach, expect, test, vi } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import type { Resource } from '../../../models/resource.ts'
import ResourcesPage from '../ResourcesPage.tsx'

vi.mock('../../hooks/useResources.ts', () => ({
  useResources: () => ({
    data: [
      {
        id: 1,
        unitId: 5,
        type: 'Docs',
        title: 'Database documentation',
        url: 'https://example.com/database-docs',
        addedBy: null,
        description: null,
      },
      {
        id: 2,
        unitId: 5,
        type: 'Guide',
        title: 'Database guide',
        url: 'https://example.com/database-guide',
        addedBy: null,
        description: null,
      },
      {
        id: 3,
        unitId: 6,
        type: 'Docs',
        title: 'Full stack documentation',
        url: 'https://example.com/full-stack-docs',
        addedBy: null,
        description: null,
      },
    ] satisfies Resource[],
    isPending: false,
    isError: false,
  }),
}))

vi.mock('../../components/AddResourceForm.tsx', () => ({
  default: () => null,
}))

afterEach(cleanup)

test('filters resources by unit and type together', async () => {
  const user = userEvent.setup()

  render(<ResourcesPage />)

  expect(screen.getByText('Database documentation')).toBeTruthy()
  expect(screen.getByText('Database guide')).toBeTruthy()
  expect(screen.getByText('Full stack documentation')).toBeTruthy()

  await user.selectOptions(screen.getByLabelText('Unit'), '5')
  await user.selectOptions(screen.getByLabelText('Type'), 'Docs')

  expect(screen.getByText('Database documentation')).toBeTruthy()
  expect(screen.queryByText('Database guide')).toBeNull()
  expect(screen.queryByText('Full stack documentation')).toBeNull()

  expect(
    screen.getByRole('heading', {
      name: 'Unit 05: Databases (1)',
    }),
  ).toBeTruthy()
})

test('shows a message when no resources match both filters', async () => {
  const user = userEvent.setup()

  render(<ResourcesPage />)

  await user.selectOptions(screen.getByLabelText('Unit'), '6')
  await user.selectOptions(screen.getByLabelText('Type'), 'Guide')

  expect(screen.getByRole('status').textContent).toBe(
    'No resources match these filters.',
  )

  expect(screen.queryByText('Database documentation')).toBeNull()
  expect(screen.queryByText('Database guide')).toBeNull()
  expect(screen.queryByText('Full stack documentation')).toBeNull()
})
