/** The kinds of resource the Resources & guides page can filter by. */
export type ResourceType = 'Docs' | 'Handbook' | 'Guide' | 'Cheatsheet' | 'Video'

/** A link to extra learning material. Fields needed to create one. */
export interface ResourceData {
  /** The unit it helps with. Null means General (shown under every unit). */
  unitId: number | null
  type: ResourceType
  title: string
  url: string
  /** Short source or detail shown on the right, e.g. 'react.dev' or 'Video guide · 18:45'. */
  description: string | null
  /** Lessons this resource fits. Saved to the lesson_resources join table, not the resources table. */
  lessonIds?: number[]
}

/** A resource as stored in the database. */
export interface Resource extends Omit<ResourceData, 'lessonIds'> {
  id: number
  /** Auth0 id of the person who added it (req.auth.sub). Null for resources from the seed. */
  addedBy: string | null
}