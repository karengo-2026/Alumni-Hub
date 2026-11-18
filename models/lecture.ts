/** A lecture video from the Karengo 2026 YouTube playlist. Fields needed to create one. */
export interface LectureData {
  /** The lesson this lecture belongs to. */
  lessonId: number
  /** The order to watch this lesson's lectures in (1 = first). */
  lectureNumber: number
  /** Title as it appears on YouTube, e.g. 'Unit 1 - T3: Data Types, Functions and Modules'. */
  title: string
  /** The part after v= in the YouTube link, e.g. 'oG94i3F9NyA'. Used for the embed and the watch link. */
  youtubeId: string
  /** Video length as shown on YouTube, e.g. '1:07:30'. */
  length: string
}

/** A lecture as stored in the database. */
export interface Lecture extends LectureData {
  id: number
}
