import { Link } from 'react-router'
import { useUnits } from '../hooks/useUnits.ts'

export default function Home() {
  const { data: units, isPending, isError } = useUnits()

  if (isPending) return <p>Loading…</p>
  if (isError) return <p>Couldn't load the units</p>

  return (
    <div className="page">
      <h1>Kia ora!</h1>
      <p className="lede">
        Every bootcamp lesson in one place, with its handbook page, lectures and
        code from class.
      </p>

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
    </div>
  )
}
