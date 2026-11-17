import type { Lesson } from './lesson.ts'

/** A bootcamp unit, e.g. Unit 01 JavaScript Fundamentals. Fields needed to create one. */
export interface UnitData {
  /** Two-digit unit number as shown in the handbook, e.g. '01'. */
  number: string
  /** Unit name, e.g. 'JavaScript Fundamentals'. */
  name: string
  /** The unit's page in the public Student Handbook. */
  handbookUrl: string
  /** The unit's folder in the karengo-2026 code-from-class repo (org members only). */
  codeFromClassFolderUrl: string | null
  /** The unit's lecture playlist on YouTube. */
  playlistUrl: string | null
}


/** A unit as stored in the database. */
export interface Unit extends UnitData {
  id: number
}

/** A unit with its lesson count, for the sidebar and Home tiles (GET /api/v1/units). */
export interface UnitSummary extends Unit {
  lessonCount: number
}

/** A unit with all its lessons in order, for the Unit page (GET /api/v1/units/:id). */
export interface UnitWithLessons extends Unit {
  lessons: Lesson[]
}









