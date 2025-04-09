import request from 'superagent'
import { TodoData } from '../Models/todos'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export async function useAddTodo() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: async (data: TodoData) => {
      await request.post('/api/v1/todos').send(data)
    },
    onSuccess: async () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] })
    },
  })
}
