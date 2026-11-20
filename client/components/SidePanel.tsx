import type { Resource } from '../../models/resource.ts'

interface Props {
  resource: Resource
  onClose: () => void
}

export default function SidePanel({ resource, onClose }: Props) {
  return (
    <aside
      aria-labelledby="resource-preview-heading"
      className="mt-6 rounded-lg border border-gray-300 bg-white p-6"
    >
      <button
        type="button"
        onClick={onClose}
        className="mb-4 cursor-pointer rounded border border-gray-400 px-3 py-2"
      >
        Close preview
      </button>

      <h2 id="resource-preview-heading">{resource.title}</h2>

      <a href={resource.url} target="_blank" rel="noopener noreferrer">
        Open original resource (new tab)
      </a>
    </aside>
  )
}
