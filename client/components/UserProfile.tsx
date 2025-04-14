import { useParams } from 'react-router-dom'
import useUserData from '../apis/use-user-data'
import useAvatarData from '../apis/use-avatar-data'
import { Text, Heading, Image } from '@chakra-ui/react'

interface UserProfileProps {
  selectedAvatarId: number | null
}

export default function UserProfile({ selectedAvatarId }: UserProfileProps) {
  const { id } = useParams<{ id: string }>()
  const userId = Number(id)

  const {
    data: user,
    isPending: userIsPending,
    error: userError,
  } = useUserData(userId)

  // console.log(user)

  const avatarId =
    selectedAvatarId !== null ? selectedAvatarId : user ? user.avatarId : null
  const {
    data: avatar,
    isPending: avatarIsPending,
    error: avatarError,
  } = useAvatarData(Number(avatarId))

  if (userIsPending || avatarIsPending) {
    return <Text>Loading...</Text>
  }

  if (userError) {
    return <Text>Whoops! There was a problem fetching the user data.</Text>
  }

  if (avatarError) {
    return <Text>Whoops! There was a problem fetching the avatar data.</Text>
  }

  if (!user) {
    return <Text>User not found</Text>
  }

  if (!avatar) {
    return <Text>Avatar not found</Text>
  }

  const altImage = avatar.image.replace('-', ' ').replace('.webp', '')

  return (
    <>
      <Heading>{user.name}</Heading>
      <Text>Avatar: {avatar.name}</Text>
      <Image
        src={avatar.image}
        alt={altImage}
        borderRadius="0.5rem"
        height="auto"
        width={200}
      />
    </>
  )
}
