import type { Lecture } from '../../models/lecture'
import db from './connection'

const lectureArray = [
  'id',
  'lesson_id as lessonId',
  'lecture_number as lectureNumber',
  'title',
  'youtube_id as youtubeId',
  'length',
]

export async function getLecturesByLessonId(
  lessonId: number,
): Promise<Lecture[]> {
  const lecture = await db('lectures')
    .select(lectureArray)
    .where('lesson_id', lessonId)
    .orderBy('lecture_number')

  return lecture
}
