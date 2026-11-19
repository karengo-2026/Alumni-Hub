import { useResources } from '../hooks/useResources.ts'

const resourceGroups = [
  { unitId: null, title: 'General' },
  { unitId: 1, title: 'Unit 01: JavaScript Fundamentals' },
  { unitId: 2, title: 'Unit 02: Client-Side Rendering' },
  { unitId: 3, title: 'Unit 03: Frontend APIs and Async' },
  { unitId: 4, title: 'Unit 04: Express Server and JSON APIs' },
  { unitId: 5, title: 'Unit 05: Databases' },
  { unitId: 6, title: 'Unit 06: The Full Stack' },
]

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
        resourceGroups.map((group) => {
          const groupResources = resources.filter(
            (resource) => resource.unitId === group.unitId,
          )

          if (groupResources.length === 0) {
            return null
          }

          return (
            <section key={group.unitId ?? 'general'}>
              <h2>
                {group.title} ({groupResources.length})
              </h2>

              <ul>
                {groupResources.map((resource) => (
                  <li key={resource.id}>
                    <span>{resource.type}: </span>
                    <a href={resource.url}>{resource.title}</a>
                  </li>
                ))}
              </ul>
            </section>
          )
        })
      )}
    </section>
  )
}
