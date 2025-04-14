import request from 'superagent'
import { useQuery } from '@tanstack/react-query'

import { Todo } from '../models/todos'

export default function useTodos() {
  return useQuery({
    queryKey: ['todos'],
    queryFn: async () => {
      const res = await request.get('/api/v1/todos')
      if (res.ok) {
        // console.log('use todos', res.body)
        return res.body as Todo[]
      }

      throw new Error(res.text)
    },
  })
}
