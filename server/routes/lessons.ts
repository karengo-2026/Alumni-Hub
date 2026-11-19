import express from 'express'
import * as db from '../db/lessons.ts'

const router = express.Router()

// GET /api/v1/lessons/:id
router.get('/:id', async (_req, res, next) => {
  try {
    const id = Number(_req.params.id)
    const lesson = await db.getLessonById(id)

    if(!lesson){
      return res.sendStatus(404)
    }

    res.json(lesson)
  } catch (err) {
    next(err)
  }
})

export default router
