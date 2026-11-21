import { beforeEach, expect, test, vi } from 'vitest'
import express from 'express'
import request from 'supertest'
import * as db from '../../db/resources.ts'
import resourcesRouter from '../resources.ts'
import checkJwt from '../../auth0.ts'
import type { JwtRequest } from '../../auth0.ts'

vi.mock('../../db/resources.ts')

vi.mock('../../auth0.ts', () => ({
  default: vi.fn(),
}))

const app = express()
app.use(express.json())
app.use('/api/v1/resources', resourcesRouter)

beforeEach(() => {
  vi.resetAllMocks()
})

test('GET returns resources with status 200', async () => {
  const resources = [
    {
      id: 1,
      unitId: null,
      type: 'Docs' as const,
      title: 'Example documentation',
      url: 'https://example.com/docs',
      addedBy: null,
      description: null,
    },
  ]

  vi.mocked(db.getAllResources).mockResolvedValue(resources)

  const response = await request(app).get('/api/v1/resources')

  expect(response.status).toBe(200)
  expect(response.body).toEqual(resources)
})

test('POST rejects a request without a verified user ID', async () => {
  vi.mocked(checkJwt).mockImplementation(async (_req, _res, next) => {
    next()
  })

  const response = await request(app).post('/api/v1/resources').send({
    title: 'Example documentation',
    url: 'https://example.com/docs',
    type: 'Docs',
    unitId: null,
  })

  expect(checkJwt).toHaveBeenCalledTimes(1)
  expect(response.status).toBe(401)
  expect(response.body).toEqual({ message: 'Sign-in required.' })
  expect(db.addResource).not.toHaveBeenCalled()
})

test.each([
  ['title', { url: 'https://example.com/docs', type: 'Docs' }],
  ['URL', { title: 'Example documentation', type: 'Docs' }],
])('POST rejects a missing %s', async (_field, body) => {
  vi.mocked(checkJwt).mockImplementation(async (req, _res, next) => {
    ;(req as JwtRequest).auth = { sub: 'auth0|test-contributor' }
    next()
  })

  const response = await request(app).post('/api/v1/resources').send(body)

  expect(response.status).toBe(400)
  expect(response.body).toEqual({
    message: 'Title and URL are required.',
  })
  expect(db.addResource).not.toHaveBeenCalled()
})

test('POST saves valid data with the verified contributor ID', async () => {
  vi.mocked(checkJwt).mockImplementation(async (req, _res, next) => {
    ;(req as JwtRequest).auth = { sub: 'auth0|test-contributor' }
    next()
  })

  const savedResource = {
    id: 42,
    unitId: null,
    type: 'Docs' as const,
    title: 'Helpful documentation',
    url: 'https://example.com/docs',
    addedBy: 'auth0|test-contributor',
    description: null,
  }

  vi.mocked(db.addResource).mockResolvedValue(savedResource)

  const response = await request(app).post('/api/v1/resources').send({
    title: '  Helpful documentation  ',
    url: '  https://example.com/docs  ',
    type: 'Docs',
    unitId: null,
    addedBy: 'untrusted-client-value',
  })

  expect(response.status).toBe(201)
  expect(response.body).toEqual(savedResource)
  expect(db.addResource).toHaveBeenCalledTimes(1)
  expect(db.addResource).toHaveBeenCalledWith(
    {
      title: 'Helpful documentation',
      url: 'https://example.com/docs',
      type: 'Docs',
      unitId: null,
      lessonIds: [],
      description: null,
    },
    'auth0|test-contributor',
  )
})
