import { useAuth0 } from '@auth0/auth0-react'
import { useAddResource } from '../hooks/useResources.ts'
import { useState } from 'react'
import type { ResourceType } from '../../models/resource.ts'
import type { FormEvent } from 'react'

export default function AddResourceForm() {
  const [title, setTitle] = useState('')
  const [url, setUrl] = useState('')
  const [unit, setUnit] = useState('general')
  const [type, setType] = useState<ResourceType>('Cheatsheet')
  const { isAuthenticated, isLoading } = useAuth0()
  const addResource = useAddResource()

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (addResource.isPending) {
      return
    }

    addResource.mutate(
      {
        title: title.trim(),
        url: url.trim(),
        unitId: unit === 'general' ? null : Number(unit),
        type,
        description: null,
      },
      {
        onSuccess: () => {
          setTitle('')
          setUrl('')
          setUnit('general')
          setType('Cheatsheet')
        },
      },
    )
  }

  if (isLoading) {
    return <p>Checking sign-in…</p>
  }

  if (!isAuthenticated) {
    return <p>Sign in to add a resource.</p>
  }

  return (
    <details>
      <summary>Add a resource</summary>

      <p>Share a useful learning resource with the cohort.</p>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="resource-title">Title</label>
          <input
            id="resource-title"
            name="title"
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            placeholder="e.g. My Knex joins cheat sheet"
            required
            disabled={addResource.isPending}
          />
        </div>

        <div>
          <label htmlFor="resource-url">Link</label>
          <input
            id="resource-url"
            name="url"
            type="url"
            value={url}
            onChange={(event) => setUrl(event.target.value)}
            placeholder="https://..."
            required
            disabled={addResource.isPending}
          />
        </div>

        <div>
          <label htmlFor="resource-unit">Unit</label>
          <select
            id="resource-unit"
            name="unit"
            value={unit}
            onChange={(event) => setUnit(event.target.value)}
            disabled={addResource.isPending}
          >
            <option value="general">General</option>
            <option value="1">Unit 01</option>
            <option value="2">Unit 02</option>
            <option value="3">Unit 03</option>
            <option value="4">Unit 04</option>
            <option value="5">Unit 05</option>
            <option value="6">Unit 06</option>
          </select>
        </div>

        <div>
          <label htmlFor="resource-type">Type</label>
          <select
            id="resource-type"
            name="type"
            value={type}
            onChange={(event) => setType(event.target.value as ResourceType)}
            disabled={addResource.isPending}
          >
            <option value="Docs">Docs</option>
            <option value="Handbook">Handbook</option>
            <option value="Guide">Guide</option>
            <option value="Cheatsheet">Cheatsheet</option>
            <option value="Video">Video</option>
          </select>
        </div>

        <button type="submit" disabled={addResource.isPending}>
          {addResource.isPending ? 'Adding…' : 'Add resource'}
        </button>
      </form>

      {addResource.isPending && <p role="status">Saving resource…</p>}

      {addResource.isError && (
        <p role="alert">Unable to save the resource. Please try again.</p>
      )}

      {addResource.isSuccess && <p role="status">Resource added.</p>}
    </details>
  )
}
