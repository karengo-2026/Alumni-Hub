import { useResources } from '../hooks/useResources.ts'
import { useState } from 'react'
import type { Resource, ResourceType } from '../../models/resource.ts'
import AddResourceForm from '../components/AddResourceForm.tsx'
import ResourceList from '../components/ResourceList.tsx'
import SidePanel from '../components/SidePanel.tsx'

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
  const [selectedResource, setSelectedResource] = useState<Resource | null>(
    null,
  )
  const [selectedUnit, setSelectedUnit] = useState('all')
  const [selectedType, setSelectedType] = useState<ResourceType | 'all'>('all')
  const { data: resources, isPending, isError } = useResources()

  if (isPending) {
    return <p>Loading resources…</p>
  }

  if (isError) {
    return <p role="alert">Unable to load resources. Please try again.</p>
  }

  const hasMatchingResources = resources.some((resource) => {
    const unitValue =
      resource.unitId === null ? 'general' : String(resource.unitId)

    const matchesUnit = selectedUnit === 'all' || selectedUnit === unitValue
    const matchesType = selectedType === 'all' || selectedType === resource.type

    return matchesUnit && matchesType
  })

  return (
    <div
      className={`grid items-start gap-6 p-6 ${
        selectedResource ? 'lg:grid-cols-2' : ''
      }`}
    >
      <section aria-labelledby="resources-heading">
        <h1 id="resources-heading">Resources &amp; guides</h1>

        <label htmlFor="unit-filter">Unit</label>
        <select
          id="unit-filter"
          value={selectedUnit}
          onChange={(event) => setSelectedUnit(event.target.value)}
        >
          <option value="all">All units</option>

          {resourceGroups.map((group) => (
            <option
              key={group.unitId ?? 'general'}
              value={group.unitId === null ? 'general' : String(group.unitId)}
            >
              {group.title}
            </option>
          ))}
        </select>

        <label htmlFor="type-filter">Type</label>
        <select
          id="type-filter"
          value={selectedType}
          onChange={(event) =>
            setSelectedType(event.target.value as ResourceType | 'all')
          }
        >
          <option value="all">All types</option>
          <option value="Docs">Docs</option>
          <option value="Handbook">Handbook</option>
          <option value="Guide">Guide</option>
          <option value="Cheatsheet">Cheatsheet</option>
          <option value="Video">Video</option>
        </select>

        {resources.length === 0 ? (
          <p>No resources available yet.</p>
        ) : !hasMatchingResources ? (
          <p role="status">No resources match these filters.</p>
        ) : (
          resourceGroups.map((group) => {
            const groupValue =
              group.unitId === null ? 'general' : String(group.unitId)

            if (selectedUnit !== 'all' && selectedUnit !== groupValue) {
              return null
            }

            const groupResources = resources.filter(
              (resource) =>
                resource.unitId === group.unitId &&
                (selectedType === 'all' || resource.type === selectedType),
            )

            if (groupResources.length === 0) {
              return null
            }

            return (
              <section key={group.unitId ?? 'general'}>
                <h2>
                  {group.title} ({groupResources.length})
                </h2>

                <ResourceList
                  resources={groupResources}
                  onPreview={setSelectedResource}
                />
              </section>
            )
          })
        )}
        <AddResourceForm />
      </section>

      {selectedResource && (
        <SidePanel
          resource={selectedResource}
          onClose={() => setSelectedResource(null)}
        />
      )}
    </div>
  )
}
