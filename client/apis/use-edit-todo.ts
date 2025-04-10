import { useMutation, useQueryClient } from '@tanstack/react-query'
import request from 'superagent'
import { Todo, TodoData } from '../Models/todos'

export function useEditTodo(id: number) {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (data: TodoData) => {
      await request.patch(`/api/v1/todos/${id}`).send(data)
    },
    onSuccess: async () => {
      queryClient.invalidateQueries({ queryKey: ['todos', id] })
    },
  })
}
