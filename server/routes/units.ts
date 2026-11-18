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
    const id = Number(_req.params.id)
    const unit = await db.getUnitById(id)

    // If the unit is not found, send a 404 response
    if (!unit) {
      res.sendStatus(404)
      return
    }

    res.json(unit)
  } catch (err) {
    next(err)
  }
})

export default router
