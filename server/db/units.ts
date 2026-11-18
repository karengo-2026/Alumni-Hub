import type { Unit, UnitWithLessons } from '../../models/unit.ts'

import connection from './connection.ts'

export async function getAllUnits(db = connection): Promise<Unit[]> {
  return db('units').select('id', 'number', 'name').orderBy('number', 'asc')
}

export async function getUnitById(
  id: number,
  db = connection,
): Promise<UnitWithLessons | undefined> {
  const unit = await db('units')
    .where({ id })
    .select('id', 'number', 'name')
    .first()

  if (!unit) return undefined

  const lessons = await db('lessons')
    .where({ unit_id: id })
    .select(
      'id',
      'unit_id as unitId',
      'lesson_number as lessonNumber',
      'name',
      'description',
      'source',
      'handbook_url as handbookUrl',
      'code_from_class_url as codeFromClassUrl',
    )
    .orderBy('lesson_number', 'asc')

  return { ...unit, lessons }
}
