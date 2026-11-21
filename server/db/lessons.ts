import { Lecture } from '../../models/lecture.ts'
import type { Lesson } from '../../models/lesson.ts'
import db from './connection.ts'

export async function getLessonById(id: number): Promise<Lesson | undefined> {
  const result = await db('lessons')
    .where('lessons.id', id)
    .select(
      'id',
      'unit_id as unitId',
      'lesson_number as lessonNumber',
      'name',
      'description',
      'source',
      'handbook_url as handbookUrl',
      'code_from_class_url as codeFromClassUrl',
    )
    .first()

  return result
}

export async function getLecturesByLessonId(
  id: number,
): Promise<Lecture[] | undefined> {
  const result = await db('lectures')
    .where('lectures.lesson_id', id)
    .select(
      'id',
      'lesson_id as lessonId',
      'lecture_number as lectureNumber',
      'title',
      'youtube_id as youtubeId',
      'length',
    )

  return result
}

export { getResourcesByLessonId } from './resources.ts'
