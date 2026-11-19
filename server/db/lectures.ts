import type { LectureData } from '../../models/lecture'
import db from './connection'

const lectureArray = [
  'id',
  'lecture_number as lectureNumber',
  'title',
  'youtube_id as youtubeId',
  'length',
]

export async function getLecturesByLessonId(
  lessonId: number,
): Promise<LectureData | undefined> {
  const lecture = await db('lectures')
    .select(lectureArray)
    .where('lectures.id', lessonId)
    .first()

  return lecture
}
