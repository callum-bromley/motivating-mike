import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Box,
  Circle,
  Image,
  Text,
} from '@chakra-ui/react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import request from 'superagent'

const avatars = [
  {
    id: 1,
    name: 'Mike',
    image: '/public/images/avatars/mike.WebP',
  },
  {
    id: 2,
    name: 'Mandy',
    image: '/public/images/avatars/mandy.WebP',
  },
  {
    id: 3,
    name: 'Slappy',
    image: '/public/images/avatars/slappy-the-seal.WebP',
  },
]

interface AvatarDrawerProps {
  isOpen: boolean
  onClose: () => void
  setSelectedAvatarId: (id: number | null) => void
  userId: number
}

export default function PickAvatar({
  isOpen,
  onClose,
  setSelectedAvatarId,
  userId,
}: AvatarDrawerProps) {
  const queryClient = useQueryClient()

  const updateAvatar = useMutation({
    mutationFn: (avatarId: number) =>
      request.patch(`/api/v1/users/${userId}`).send({ avatar_id: avatarId }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['avatars'] })
      queryClient.invalidateQueries({ queryKey: ['user', userId] })
    },
  })

  const handleAvatarClick = (id: number) => {
    setSelectedAvatarId(id)
    updateAvatar.mutate(id)
    onClose()
  }

  return (
    <Drawer isOpen={isOpen} onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Select Your Avatar</DrawerHeader>
        <DrawerBody>
          <Box display="flex" justifyContent="center" gap={4}>
            {avatars.map((avatar) => (
              <Box
                key={avatar.id}
                onClick={() => handleAvatarClick(avatar.id)}
                cursor="pointer"
                _hover={{ opacity: 0.8 }}
              >
                <Circle size="100px" overflow="hidden" boxShadow="md">
                  <Image src={avatar.image} alt={avatar.name} />
                </Circle>
                <Text mt={2}>{avatar.name}</Text>
              </Box>
            ))}
          </Box>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  )
}
