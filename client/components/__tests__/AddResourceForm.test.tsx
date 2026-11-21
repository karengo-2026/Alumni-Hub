// @vitest-environment jsdom
import { afterEach, beforeEach, expect, test, vi } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'
import AddResourceForm from '../AddResourceForm.tsx'
import userEvent from '@testing-library/user-event'

const { auth, mutation } = vi.hoisted(() => ({
  auth: {
    isAuthenticated: false,
    isLoading: false,
  },
  mutation: {
    mutate: vi.fn(),
    isPending: false,
    isError: false,
    isSuccess: false,
  },
}))

vi.mock('@auth0/auth0-react', () => ({
  useAuth0: () => auth,
}))

vi.mock('../../hooks/useResources.ts', () => ({
  useAddResource: () => mutation,
}))

beforeEach(() => {
  vi.clearAllMocks()
  auth.isAuthenticated = false
  auth.isLoading = false
  mutation.isPending = false
  mutation.isError = false
  mutation.isSuccess = false
})

afterEach(cleanup)

test('asks signed-out users to sign in and hides the form', () => {
  render(<AddResourceForm />)

  expect(screen.getByText('Sign in to add a resource.')).toBeTruthy()
  expect(screen.queryByLabelText('Title')).toBeNull()
  expect(mutation.mutate).not.toHaveBeenCalled()
})

test('submits the entered resource details', async () => {
  const user = userEvent.setup()
  auth.isAuthenticated = true

  render(<AddResourceForm />)

  await user.click(screen.getByText('Add a resource'))

  await user.type(screen.getByLabelText('Title'), '  Helpful documentation  ')
  await user.type(screen.getByLabelText('Link'), 'https://example.com/docs')
  await user.selectOptions(screen.getByLabelText('Unit'), '5')
  await user.selectOptions(screen.getByLabelText('Type'), 'Docs')

  await user.click(screen.getByRole('button', { name: 'Add resource' }))

  expect(mutation.mutate).toHaveBeenCalledTimes(1)
  expect(mutation.mutate).toHaveBeenCalledWith(
    {
      title: 'Helpful documentation',
      url: 'https://example.com/docs',
      unitId: 5,
      type: 'Docs',
      description: null,
    },
    expect.objectContaining({
      onSuccess: expect.any(Function),
    }),
  )
})

test('shows an error message when saving fails', async () => {
  const user = userEvent.setup()
  auth.isAuthenticated = true
  mutation.isError = true

  render(<AddResourceForm />)

  await user.click(screen.getByText('Add a resource'))

  expect(screen.getByRole('alert').textContent).toBe(
    'Unable to save the resource. Please try again.',
  )
})
