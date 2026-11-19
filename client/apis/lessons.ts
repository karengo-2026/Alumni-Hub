import type { LessonData } from '../../models/lesson.ts'
import request from 'superagent'

const rootURL = new URL(`/api/v1`, document.baseURI)

export async function getLesson(): Promise<LessonData[]> {
  const response = await request.get(`${rootURL}/lessons`)
  return response.body.lessons
}