import type { UnitData, Unit } from '../../models/unit.ts'
import request from 'superagent'

const roolURL = new URL(`/api/v1`, document.baseURI)

export async function getUnits(): Promise<UnitData[]> {
  const response = await request.get(`${roolURL}/units`)
  return response.body.units
}

export async function getUnit(): Promise<Unit[]> {
  const response = await request.get(`${roolURL}/units/:id`)
  return response.body.units.id
}
