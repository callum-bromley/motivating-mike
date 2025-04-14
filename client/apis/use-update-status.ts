import { QueryClient, useMutation, useQueryClient } from '@tanstack/react-query'

interface updateTodoStatus {
  id: number
  todo: string
  isComplete: boolean
  isActive: boolean
}

const updateTodoStatus = async (id: number) => {
  const response = await fetch(`/api/v1/todostatus/${id}`, {
    method: 'PATCH',
    body: JSON.stringify({}),
    headers: {
      'Content-Type': 'application/json',
    },
  })

  if (!response.ok) {
    throw new Error('Failed to update todo status')
  }

  return response.json()
}

export const useUpdateStatus = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({ id }: { id: number }) => updateTodoStatus(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] })
    },
  })
}
