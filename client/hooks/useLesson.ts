import { useQuery } from '@tanstack/react-query'
import { getLesson } from '../apis/lessons'

export function useLesson(id: number) {
  const query = useQuery({
    queryKey: ['lesson', id],
    queryFn: () => getLesson(id),
  })

  return query
}
