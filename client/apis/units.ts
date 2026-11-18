import type { Unit, UnitWithLessons } from '../../models/unit.ts'
import request from 'superagent'

const rootURL = new URL(`/api/v1`, document.baseURI)

export async function getUnits(): Promise<Unit[]> {
  const response = await request.get(`${rootURL}/units`)
  return response.body
}

export async function getUnit(id: number): Promise<UnitWithLessons> {
  const response = await request.get(`${rootURL}/units/${id}`)
  return response.body
}
