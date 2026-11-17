export type ResourceType =
  'Docs' | 'Handbook' | 'Guide' | 'Cheatsheet' | 'Video'

export interface ResourceData {
  unitId: number | null // null = General
  type: ResourceType
  title: string
  url: string
  note: string | null // e.g. 'react.dev' or 'Video guide · 18:45'
  lessonIds?: number[] // lessons it fits (lesson_resources join table)
}

export interface Resource extends Omit<ResourceData, 'lessonIds'> {
  id: number
  addedBy: string | null // Auth0 id (req.auth.sub); null for seeded resources
}
