import express from 'express'
import * as db from '../db/resources.ts'

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
router.post('/', async (_req, res, next) => {
  try {
    const resources = await db.addResource()
    res.json(resources)
  } catch (err) {
    next(err)
  }
})

export default router