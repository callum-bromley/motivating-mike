import request from 'superagent'
import { Todo } from '../models/todos'
import { useQuery } from '@tanstack/react-query'

export default function useUserTodos(userId: number | undefined) {
  return useQuery({
    queryKey: ['todos', userId],
    queryFn: async () => {
      const res = await request.get(`api/v1/todos/user/${userId}`)
      if (res.ok) {
        // console.log('res.body', res.body)
        return res.body as Todo[]
      }
      throw new Error(res.text)
    },
  })
}
