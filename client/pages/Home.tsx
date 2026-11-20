import { Link } from 'react-router'
import { useUnits } from '../hooks/useUnits.ts'

// Placeholder until the resources PR is merged into main.
// Then delete this and use: const { data: resources } = useResources()
const resources = [
  {
    id: 1,
    unit_id: null,
    type: 'Handbook',
    title: 'Student Handbook: Guides',
    url: 'https://student-handbook.devacademy.life/guides',
  },
  {
    id: 2,
    unit_id: null,
    type: 'Docs',
    title: 'MDN Web Docs',
    url: 'https://developer.mozilla.org/en-US/',
  },
  {
    id: 31,
    unit_id: null,
    type: 'Guide',
    title: 'Introduction to promptkit and AI',
    url: 'https://www.youtube.com/watch?v=z5-2cLSFMDc',
  },
  {
    id: 33,
    unit_id: null,
    type: 'Guide',
    title: 'Doing more with promptkit',
    url: 'https://www.youtube.com/watch?v=SwEKDfTT_0k',
  },
]

// Placeholder until we track the last lesson viewed (stretch goal: localStorage)
const lastLesson = {
  unitId: 1,
  unitNumber: '01',
  unitName: 'JavaScript Fundamentals',
  lessonNumber: 2,
  name: 'Git and GitHub',
  description: 'Version control for the whole project, every folder and file.',
}

export default function Home() {
  const { data: units, isPending, isError } = useUnits()

  if (isPending) return <p>Loading…</p>
  if (isError) return <p>Couldn't load the units</p>

  return (
    <div className="page">
      <h1>Kia ora!</h1>
      <p className="description">
        Every bootcamp lesson in one place, with its handbook page, lectures and
        code from class.
      </p>

      <section className="hero">
        <span className="hero-number" aria-hidden="true">
          {String(lastLesson.lessonNumber).padStart(2, '0')}
        </span>

        <div className="hero-content">
          <span className="hero-label">
            Continue where you left off (Placeholder)
          </span>
          <h2>
            {String(lastLesson.lessonNumber).padStart(2, '0')} {lastLesson.name}
          </h2>
          <span className="crumb">
            Unit {lastLesson.unitNumber} · {lastLesson.unitName}
          </span>
          <p>{lastLesson.description}</p>
          <Link
            to={`/units/${lastLesson.unitId}/lessons/${lastLesson.lessonNumber}`}
            className="btn btn-primary"
          >
            Resume →
          </Link>
        </div>
      </section>

      <section className="card">
        <h2>Course units</h2>
        <div className="tiles">
          {units.map((unit) => (
            <Link key={unit.id} to={`/units/${unit.id}`} className="tile">
              <span className="crumb">Unit {unit.number}</span>
              <h3>{unit.name}</h3>
            </Link>
          ))}
        </div>
      </section>

      <section className="card">
        <div className="flex items-center justify-between">
          <h2>Resources & Guides</h2>
          <Link to="/resources">See all {resources.length}</Link>
        </div>

        <div className="list">
          {resources.map((resource) => (
            <a
              key={resource.id}
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="list-row"
            >
              <span className="pill">{resource.type}</span>
              <div className="grow-text">
                <h3>{resource.title}</h3>
              </div>
              <span className="btn">Read it here</span>
            </a>
          ))}
        </div>
      </section>
    </div>
  )
}
