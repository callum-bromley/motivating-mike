import request from 'superagent'
import { TodoData } from '../Models/todos'
import { useMutation, useQueryClient } from '@tanstack/react-query'

type TodoInput = {
  task: string,
  urgency: number
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
