import { useResources } from '../hooks/useResources.ts'

export default function ResourcesPage() {
  const { data: resources, isPending, isError } = useResources()

  if (isPending) {
    return <p>Loading resources…</p>
  }

  if (isError) {
    return <p role="alert">Unable to load resources. Please try again.</p>
  }

  return (
    <section aria-labelledby="resources-heading">
      <h1 id="resources-heading">Resources &amp; guides</h1>

      {resources.length === 0 ? (
        <p>No resources available yet.</p>
      ) : (
        <ul>
          {resources.map((resource) => (
            <li key={resource.id}>
              <span>{resource.type}: </span>
              <a href={resource.url}>{resource.title}</a>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}
