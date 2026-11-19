import type { Resource } from '../../models/resource.ts'
import connection from './connection.ts'

export async function getAllResources(): Promise<Resource[]> {
  return connection('resources')
    .select(
      'id',
      'unit_id as unitId',
      'type',
      'title',
      'url',
      'added_by as addedBy',
      connection.raw('NULL as description'),
    )
    .orderBy('id')
}

export async function addResource(): Promise<Resource[]> {
  throw new Error('Not implemented yet')
}
