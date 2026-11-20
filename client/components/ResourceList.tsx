import type { Resource } from '../../models/resource.ts'

interface Props {
  resources: Resource[]
  onPreview?: (resource: Resource) => void
}

export default function ResourceList({ resources, onPreview }: Props) {
  return (
    <ul>
      {resources.map((resource) => {
        const canPreview =
          resource.type === 'Guide' ||
          resource.type === 'Handbook' ||
          resource.type === 'Video'

        return (
          <li key={resource.id}>
            <span>{resource.type}: </span>

            {canPreview && onPreview ? (
              <button type="button" onClick={() => onPreview(resource)}>
                {resource.title}
              </button>
            ) : (
              <a href={resource.url} target="_blank" rel="noopener noreferrer">
                {resource.title}
              </a>
            )}
          </li>
        )
      })}
    </ul>
  )
}
