import express from 'express'
import * as db from '../db/resources.ts'
import checkJwt from '../auth0.ts'
import type { JwtRequest } from '../auth0.ts'
import type { ResourceData } from '../../models/resource.ts'

const router = express.Router()

// GET /api/v1/resources
router.get('/', async (_req, res, next) => {
  try {
    const resources = await db.getAllResources()
    res.json(resources)
  } catch (err) {
    next(err)
  }
})

// POST /api/v1/resources
router.post(
  '/',
  checkJwt,
  async (req: JwtRequest<Partial<ResourceData>>, res, next) => {
    try {
      const addedBy = req.auth?.sub

      if (!addedBy) {
        res.status(401).json({ message: 'Sign-in required.' })
        return
      }

      const body = req.body

      if (
        !body ||
        typeof body.title !== 'string' ||
        !body.title.trim() ||
        typeof body.url !== 'string' ||
        !body.url.trim()
      ) {
        res.status(400).json({ message: 'Title and URL are required.' })
        return
      }

      let url: URL

      try {
        url = new URL(body.url.trim())
      } catch {
        res.status(400).json({ message: 'Enter a valid URL.' })
        return
      }

      if (!['http:', 'https:'].includes(url.protocol)) {
        res.status(400).json({ message: 'Use an HTTP or HTTPS URL.' })
        return
      }

      const allowedTypes: ResourceData['type'][] = [
        'Docs',
        'Handbook',
        'Guide',
        'Cheatsheet',
        'Video',
      ]

      if (!body.type || !allowedTypes.includes(body.type)) {
        res.status(400).json({ message: 'Choose a valid resource type.' })
        return
      }

      const unitId = body.unitId ?? null
      const lessonIds = body.lessonIds ?? []

      if (
        (unitId !== null && (!Number.isInteger(unitId) || unitId < 1)) ||
        !Array.isArray(lessonIds) ||
        !lessonIds.every((id) => Number.isInteger(id) && id > 0)
      ) {
        res.status(400).json({ message: 'Invalid unit or lesson IDs.' })
        return
      }

      const resource = await db.addResource(
        {
          title: body.title.trim(),
          url: url.href,
          type: body.type,
          unitId,
          lessonIds,
          description: null,
        },
        addedBy,
      )

      res.status(201).json(resource)
    } catch (err) {
      next(err)
    }
  },
)

export default router
