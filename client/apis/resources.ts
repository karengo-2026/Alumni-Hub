import type { ResourceData, Resource } from '../../models/resource.ts'
import request from 'superagent'

const roolURL = new URL(`/api/v1`, document.baseURI)

export async function getResources(): Promise<ResourceData[]> {
  const response = await request.get(`${roolURL}/resources`)
  return response.body.resources
}

export async function addResource(): Promise<Resource[]> {
  const response = await request.get(`${roolURL}/resources`)
  return response.body.resources
}
