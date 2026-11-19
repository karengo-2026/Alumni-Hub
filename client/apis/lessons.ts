import type { LessonData } from '../../models/lesson.ts'
import request from 'superagent'

const rootURL = new URL(`/api/v1`, document.baseURI)

export async function getLesson(id: number): Promise<LessonData[]> {
  const response = await request.get(`${rootURL}/lessons${id}`)
  return response.body.lessons
}
