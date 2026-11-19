import { useQuery } from '@tanstack/react-query'
import { getUnits, getUnit } from '../apis/units'
import { Unit, UnitWithLessons } from '../../models/unit'

export function useUnits() {
  return useQuery<Unit[]>({
    queryKey: ['units'],
    queryFn: getUnits,
  })
}

export function useUnit(id: number) {
  return useQuery<UnitWithLessons>({
    queryKey: ['units', id],
    queryFn: () => getUnit(id),
  })
}
