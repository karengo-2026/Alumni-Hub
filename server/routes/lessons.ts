import express from 'express'
import * as db from '../db/lessons.ts'

const router = express.Router()

// GET /api/v1/lessons/:id
router.get('/:id', async (_req, res, next) => {
  try {
    const id = Number(_req.params.id)
    const lesson = await db.getLessonById(id)
    const resources = await db.getResourcesByLessonId(id)
    const lectures = await db.getLecturesByLessonId(id)

    if(!lesson){
      return res.sendStatus(404)
    }

    res.json({lesson: lesson, resources: resources, lectures: lectures})
  } catch (err) {
    next(err)
  }
})

export default router
