import request from 'superagent'
import { useQuery } from '@tanstack/react-query'

import { Heckle } from '../models/heckles'

export default function useHeckles() {
  return useQuery({
    queryKey: ['heckles'],
    queryFn: async () => {
      const res = await request.get('/api/v1/heckles')
      if (res.ok) {
        return res.body as Heckle[]
      }

      throw new Error(res.text)
    },
  })
}
