import request from 'superagent'
import { useMutation, useQueryClient } from '@tanstack/react-query'

type TodoInput = {
  userId: number
  task: string
  urgency: number
  due: string
}

export function useAddTodo() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: async (data: TodoInput) => {
      await request.post('/api/v1/todos').send(data)
    },
    onSuccess: async () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] })
    },
  })
}
