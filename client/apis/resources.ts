import type { ResourceData, Resource } from '../../models/resource.ts'
import request from 'superagent'

const rootURL = new URL(`/api/v1`, document.baseURI)

export async function getResources(): Promise<Resource[]> {
  const response = await request.get(`${rootURL}/resources`)
  return response.body
}

export async function addResource(
  data: ResourceData,
  token: string,
): Promise<Resource> {
  const response = await request
    .post(`${rootURL}/resources`)
    .set('Authorization', `Bearer ${token}`)
    .send(data)

  return response.body
}
