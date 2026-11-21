import { afterAll, beforeAll, beforeEach, expect, test } from 'vitest'
import connection from '../connection.ts'
import { addResource, getResourcesByLessonId } from '../resources.ts'

beforeAll(async () => {
  await connection.migrate.latest()
})

afterAll(async () => {
  await connection.destroy()
})

beforeEach(async () => {
  await connection('lesson_resources').del()
  await connection('resources').del()
  await connection('lessons').del()
  await connection('units').del()
})

test('returns an empty array when a lesson has no linked resources', async () => {
  const resources = await getResourcesByLessonId(1)

  expect(resources).toEqual([])
})

test('returns only resources linked to the requested lesson', async () => {
  await connection('units').insert({
    id: 1,
    number: '01',
    name: 'Test unit',
  })

  await connection('lessons').insert([
    { id: 1, unit_id: 1, lesson_number: 1, name: 'Lesson A' },
    { id: 2, unit_id: 1, lesson_number: 2, name: 'Lesson B' },
  ])

  await connection('resources').insert([
    {
      id: 10,
      type: 'Docs',
      title: 'Shared resource',
      url: 'https://example.com/shared',
    },
    {
      id: 20,
      type: 'Guide',
      title: 'Lesson A resource',
      url: 'https://example.com/lesson-a',
    },
    {
      id: 30,
      type: 'Docs',
      title: 'Lesson B resource',
      url: 'https://example.com/lesson-b',
    },
  ])

  await connection('lesson_resources').insert([
    { lesson_id: 1, resource_id: 10 },
    { lesson_id: 1, resource_id: 20 },
    { lesson_id: 2, resource_id: 10 },
    { lesson_id: 2, resource_id: 30 },
  ])

  const resources = await getResourcesByLessonId(1)

  expect(resources.map((resource) => resource.id)).toEqual([10, 20])

  expect(resources[0]).toEqual({
    id: 10,
    unitId: null,
    type: 'Docs',
    title: 'Shared resource',
    url: 'https://example.com/shared',
    addedBy: null,
    description: null,
  })
})

test('saves a general resource with the contributor ID', async () => {
  const resource = await addResource(
    {
      unitId: null,
      type: 'Docs',
      title: 'Helpful documentation',
      url: 'https://example.com/docs',
      description: null,
    },
    'auth0|test-contributor',
  )

  expect(resource).toEqual({
    id: expect.any(Number),
    unitId: null,
    type: 'Docs',
    title: 'Helpful documentation',
    url: 'https://example.com/docs',
    addedBy: 'auth0|test-contributor',
    description: null,
  })

  const savedRow = await connection('resources')
    .where({ id: resource.id })
    .first()

  expect(savedRow).toMatchObject({
    unit_id: null,
    type: 'Docs',
    title: 'Helpful documentation',
    url: 'https://example.com/docs',
    added_by: 'auth0|test-contributor',
  })
})

test('links a new resource to each lesson only once', async () => {
  await connection('units').insert({
    id: 1,
    number: '01',
    name: 'Test unit',
  })

  await connection('lessons').insert([
    { id: 1, unit_id: 1, lesson_number: 1, name: 'Lesson A' },
    { id: 2, unit_id: 1, lesson_number: 2, name: 'Lesson B' },
  ])

  const resource = await addResource(
    {
      unitId: 1,
      type: 'Guide',
      title: 'Shared learning guide',
      url: 'https://example.com/guide',
      description: null,
      lessonIds: [1, 2, 1],
    },
    'auth0|test-contributor',
  )

  const links = await connection('lesson_resources')
    .where({ resource_id: resource.id })
    .select('lesson_id', 'resource_id')
    .orderBy('lesson_id')

  expect(resource.unitId).toBe(1)
  expect(links).toEqual([
    { lesson_id: 1, resource_id: resource.id },
    { lesson_id: 2, resource_id: resource.id },
  ])
})
