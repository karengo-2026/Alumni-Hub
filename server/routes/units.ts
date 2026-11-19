import express from 'express'
import * as db from '../db/units.ts'

const router = express.Router()

// GET /api/v1/units
router.get('/', async (_req, res, next) => {
  try {
    const units = await db.getAllUnits()
    res.json(units)
  } catch (err) {
    next(err)
  }
})

// GET /api/v1/units/:id
router.get('/:id', async (_req, res, next) => {
  try {
    const units = await db.getUnitById()
    res.json(units)
  } catch (err) {
    next(err)
  }
})

export default router
