import type { Lecture } from './lecture.ts'
import type { Resource } from './resource.ts'

/** Where a lesson comes from: the Student Handbook, or an extra from the Karengo 2026 Miro board. */
export type LessonSource = 'handbook' | 'miro'

/** A lesson inside a unit, e.g. 04 Data Types. Fields needed to create one. */
export interface LessonData {
  /** The unit this lesson belongs to. */
  unitId: number
  /** The lesson's number within its unit, matching the handbook (1 = first, shown as 01). */
  lessonNumber: number
  /** Lesson name, e.g. 'Data Types'. */
  name: string
  /** One-line summary shown under the name, e.g. 'Strings, numbers, booleans and objects'. */
  description: string | null
  source: LessonSource
  /** The lesson's page in the public Student Handbook. Null for Miro extras, which have no page. */
  handbookUrl: string | null
  /** The lesson's folder in the code-from-class repo (org members only). */
  codeFromClassUrl: string | null
}

/** A lesson as stored in the database. */
export interface Lesson extends LessonData {
  id: number
}

/** Everything the Lesson page needs (GET /api/v1/lessons/:id). */
export interface LessonDetail extends Lesson {
  /** Lecture videos in the order they should be watched. */
  lectures: Lecture[]
  /** Resources and guides matched to this lesson. */
  resources: Resource[]
  // /** For the Previous / Next buttons. Null at the start or end of a unit. */
  // previousLessonId: number | null
  // nextLessonId: number | null
}
