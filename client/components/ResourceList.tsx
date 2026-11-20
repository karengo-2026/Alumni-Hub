import type { Resource } from '../../models/resource.ts'

interface Props {
  resources: Resource[]
}

export default function ResourceList({ resources }: Props) {
  return (
    <ul>
      {resources.map((resource) => (
        <li key={resource.id}>
          <span>{resource.type}: </span>
          <a href={resource.url}>{resource.title}</a>
        </li>
      ))}
    </ul>
  )
}
