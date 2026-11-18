import { useQuery } from '@tanstack/react-query'
import { getUnits, getUnit } from '../apis/units'
import { Unit } from '../../models/unit'

export function useUnits() {
  return useQuery<Unit[]>({
    queryKey: ['units'],
    queryFn: getUnits,
  })
}

export function useUnit(id: number) {
  return useQuery<Unit>({
    queryKey: ['units', id],
    queryFn: () => getUnit(id),
  })
}
