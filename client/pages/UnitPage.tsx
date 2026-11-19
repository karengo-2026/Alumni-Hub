import { Link, useParams } from 'react-router'
import { useUnit } from '../hooks/useUnits.ts'

function UnitPage() {
  const { unitId } = useParams()
  const { data: unit, isPending, isError } = useUnit(Number(unitId))

  if (isPending) return <p>Loading…</p>
  if (isError) return <p>Unit not found</p>

  return (
    <div className="page">
      <span className="crumb">Course units / Unit {unit.number}</span>
      <h1>
        Unit {unit.number}: {unit.name}
      </h1>
      <p className="description">
        Lessons from the Student Handbook in teaching order, plus video lectures
        and additional resources.
      </p>

      <section className="card">
        <h2>Lessons</h2>
        <div className="list">
          {unit.lessons.map((lesson) => (
            <Link
              key={lesson.id}
              to={`/units/${unit.id}/lessons/${lesson.lessonNumber}`}
              className="list-row"
            >
              <span className="num">{lesson.lessonNumber}</span>
              <div className="grow-text">
                <h3>{lesson.name}</h3>
                {lesson.description && (
                  <p className="row-description">{lesson.description}</p>
                )}
              </div>
              <span className="btn">View</span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}

export default UnitPage
