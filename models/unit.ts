/** A bootcamp unit, e.g. Unit 01 JavaScript Fundamentals. Fields needed to create one. */
export interface UnitData {
  /** Two-digit unit number as shown in the handbook, e.g. '01'. */
  number: string
  /** Unit name, e.g. 'JavaScript Fundamentals'. */
  name: string
}

/** A unit as stored in the database. */
export interface Unit extends UnitData {
  id: number
}

/** A unit with its lesson count, for the sidebar and Home tiles (GET /api/v1/units). */
export interface UnitSummary extends Unit {
  lessonCount: number
}

//New so it only has the fields we need for the Unit page, not all the lesson fields
export interface UnitWithLessons extends Unit {
  lessons: {
    id: number
    lessonNumber: number
    name: string
    description: string | null
  }[]
}
