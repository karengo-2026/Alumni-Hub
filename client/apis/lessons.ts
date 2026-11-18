import type { LessonData } from '../../models/lesson.ts'
import request from 'superagent'

const roolURL = new URL(`/api/v1`, document.baseURI)

export async function getLesson(): Promise<LessonData[]> {
  const response = await request.get(`${roolURL}/lessons`)
  return response.body.lessons
}