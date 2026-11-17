import type { Lecture } from './lecture.ts'
import type { Resource } from './resource.ts'

export type LessonSource = 'handbook' | 'miro'

export interface LessonData {
  unitId: number
  position: number // order inside the unit, 1 = first
  name: string
  note: string | null // short line under the name
  source: LessonSource
  handbookUrl: string | null // null for Miro items
  codeUrl: string | null
  slidesUrl: string | null
}

export interface Lesson extends LessonData {
  id: number
}

// GET /api/v1/lessons/:id (Lesson page)
export interface LessonDetail extends Lesson {
  lectures: Lecture[] // ordered by position
  resources: Resource[] // resources that fit this lesson
  prevLessonId: number | null
  nextLessonId: number | null
}