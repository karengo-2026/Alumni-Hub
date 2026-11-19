import { useParams } from 'react-router'

function UnitPage() {
  const { unitId } = useParams()

  return <h1>Unit page for unit {unitId}</h1>
}

export default UnitPage
