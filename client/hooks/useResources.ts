import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useAuth0 } from '@auth0/auth0-react'
import { getResources, addResource } from '../apis/resources.ts'
import type { ResourceData } from '../../models/resource.ts'

export function useResources() {
  return useQuery({
    queryKey: ['resources'],
    queryFn: getResources,
  })
}

export function useAddResource() {
  const queryClient = useQueryClient()
  const { getAccessTokenSilently } = useAuth0()

  return useMutation({
    mutationFn: async (data: ResourceData) => {
      const token = await getAccessTokenSilently()

      if (!token) {
        throw new Error('Sign-in required to add a resource.')
      }

      return addResource(data, token)
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ['resources'],
      })
    },
  })
}
