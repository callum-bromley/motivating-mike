import { useMutation, useQueryClient } from '@tanstack/react-query'
import request from 'superagent'

// import { TodoData, Todo } from "../Models/todos";

export function useDeleteTodo() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (id: number) => {
      await request.delete(`/api/v1/todos/${id}`)
    },
    onSuccess: async () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] })
    },
  })
}
