import type { ResourceData, Resource } from '../../models/resource.ts'
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

export async function getResourcesByLessonId(
  lessonId: number,
): Promise<Resource[]> {
  return connection('resources')
    .join('lesson_resources', 'resources.id', 'lesson_resources.resource_id')
    .where('lesson_resources.lesson_id', lessonId)
    .select(
      'resources.id',
      'resources.unit_id as unitId',
      'resources.type',
      'resources.title',
      'resources.url',
      'resources.added_by as addedBy',
      connection.raw('NULL as description'),
    )
    .orderBy('resources.id')
}

export async function addResource(
  resource: ResourceData,
  addedBy: string,
): Promise<Resource> {
  return connection.transaction(async (trx) => {
    const [savedResource] = await trx('resources')
      .insert({
        unit_id: resource.unitId,
        type: resource.type,
        title: resource.title,
        url: resource.url,
        added_by: addedBy,
      })
      .returning([
        'id',
        'unit_id as unitId',
        'type',
        'title',
        'url',
        'added_by as addedBy',
      ])

    const lessonIds = [...new Set(resource.lessonIds ?? [])]

    if (lessonIds.length > 0) {
      await trx('lesson_resources').insert(
        lessonIds.map((lessonId) => ({
          lesson_id: lessonId,
          resource_id: savedResource.id,
        })),
      )
    }

    return {
      ...savedResource,
      description: null,
    }
  })
}
