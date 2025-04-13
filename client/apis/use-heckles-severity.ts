import request from 'superagent'
import { useQuery } from '@tanstack/react-query'

import { Heckle } from '../models/heckles'

export default function useHecklesSeverity(severity: number) {
  return useQuery({
    queryKey: ['heckles', severity],
    queryFn: async () => {
      const res = await request.get(`/api/v1/heckles/severity/${severity}`)
      if (res.ok) {
        return res.body as Heckle[]
      }

      throw new Error(res.text)
    },
  })
}

