import { useQuery } from '@tanstack/react-query'
import { getResources } from '../apis/resources.ts'

export function useResources() {
  return useQuery({
    queryKey: ['resources'],
    queryFn: getResources,
  })
}

export function useAddResource() {
  return 'useAddResource hook'
}
