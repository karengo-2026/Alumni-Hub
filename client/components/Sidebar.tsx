import { useState } from 'react'
import { Link } from 'react-router'
import { useUnit, useUnits } from '../hooks/useUnits.ts'
import type { Unit } from '../../models/unit.ts'

// Helper function ai guided:
function SidebarLessons({ unitId }: { unitId: number }) {
  const { data: unit } = useUnit(unitId)

  return (
    <ul className="pl-6">
      {unit?.lessons.map((lesson) => (
        <li key={lesson.id}>
          <Link to={`/units/${unitId}/lessons/${lesson.lessonNumber}`}>
            <span className="num">
              {/* Pad single-digit lesson numbers with a leading zero, e.g. 01 */}
              {String(lesson.lessonNumber).padStart(2, '0')}
            </span>
            {lesson.name}
          </Link>
        </li>
      ))}
    </ul>
  )
}

// Helper function ai guided:
function SidebarUnit({ unit }: { unit: Unit }) {
  const [open, setOpen] = useState(false)

  return (
    <li>
      <div className="flex items-start gap-2">
        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label={`${open ? 'Collapse' : 'Expand'} Unit ${unit.number}`}
        >
          {open ? '▾' : '▸'}
        </button>
        <Link to={`/units/${unit.id}`} className="flex flex-col">
          <span className="crumb">Unit {unit.number}</span>
          <span>{unit.name}</span>
        </Link>
      </div>
      {open && <SidebarLessons unitId={unit.id} />}
    </li>
  )
}

function Sidebar() {
  const { data: units } = useUnits()

  return (
    <nav className="w-64 bg-white p-4">
      <Link to="/">Alumni Hub</Link>

      <h2>Course units</h2>
      <ul>
        {units?.map((unit) => (
          <SidebarUnit key={unit.id} unit={unit} />
        ))}
      </ul>

      <div className="flex flex-col gap-2">
        <Link to="/" className="btn">
          Home
        </Link>
        <Link to="/resources" className="btn">
          Resources
        </Link>
      </div>
    </nav>
  )
}

export default Sidebar
