import type { LessonInformation } from '../../models/lesson.ts'
import request from 'superagent'

const rootURL = new URL(`/api/v1`, document.baseURI)

export async function getLesson(id: number): Promise<LessonInformation> {
  const response = await request.get(`${rootURL}/lessons/${id}`)
  return response.body as LessonInformation
}
