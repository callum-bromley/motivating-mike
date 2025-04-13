// import { useState } from 'react'
import request from 'superagent'
import { useQuery } from '@tanstack/react-query'
import { Avatar } from '../models/avatars'

// export function useSelectedAvatar() {
//   const [selectedAvatarId, setSelectedAvatarId] = useState<number | null>(null)

//   return { selectedAvatarId, setSelectedAvatarId }
// }

export default function useAvatarData(id: number) {
  const query = useQuery({
    queryKey: ['avatars', id],
    queryFn: async () => {
      const res = await request.get(`/api/v1/avatars/${id}`)
      return res.body as Avatar
    },
  })

  return { ...query }
}
