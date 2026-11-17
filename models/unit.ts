import type { Lesson } from './lesson.ts'

export interface UnitData {
  number: string // '01'
  name: string // 'JavaScript Fundamentals'
  handbookUrl: string
  codeFolderUrl: string | null // code-from-class folder (org members only)
  playlistUrl: string | null
}

export interface Unit extends UnitData {
  id: number
}

// GET /api/v1/units (sidebar, Home tiles)
export interface UnitSummary extends Unit {
  lessonCount: number
}

// GET /api/v1/units/:id (Unit page)
export interface UnitWithLessons extends Unit {
  lessons: Lesson[] // ordered by position
}