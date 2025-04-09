import { useMutation, useQueryClient } from '@tanstack/react-query'
import request from 'superagent'
import { Todo } from '../Models/todos'

export async function useUpdateTodo(id: number) {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (todo: Todo) => {
      await request.patch(`/api/v1/todos/${id}`).send(todo)
    },
    onSuccess: async () => {
      queryClient.invalidateQueries({ queryKey: ['todos', id] })
    },
  })
}
