import { useMutation, useQueryClient } from '@tanstack/react-query'
import request from 'superagent'

export default function useUpdateUserAvatar(userId: number) {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (avatarId: number) =>
      request.patch(`/api/v1/users/${userId}`).send({ avatar_id: avatarId }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['avatars'] })
    },
  })
}
