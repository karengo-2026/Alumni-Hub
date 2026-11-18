import express from 'express'
import * as db from '../db/lessons.ts'

const router = express.Router()

// GET /api/v1/lessons/:id
router.get('/:id', async (_req, res, next) => {
  try {
    const lesson = await db.getLessonById()
    res.json(lesson)
  } catch (err) {
    next(err)
  }
})

export default router
