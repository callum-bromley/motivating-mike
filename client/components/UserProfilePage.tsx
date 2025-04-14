import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Box, Button, Flex } from '@chakra-ui/react'
import PickAvatar from './PickAvatar'
import TaskHistory from './TaskHistory'
import UserProfile from './UserProfile'

export default function UserHomePage() {
  const { id } = useParams<{ id: string }>()
  const userId = Number(id)

  const [selectedAvatarId, setSelectedAvatarId] = useState<number | null>(null)
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const openDrawer = () => setIsDrawerOpen(true)
  const closeDrawer = () => setIsDrawerOpen(false)

  return (
    <Flex>
      <Box
        display="flex"
        flexBasis="40%"
        flexDirection="column"
        justifyContent="flex-start"
      >
        <UserProfile selectedAvatarId={selectedAvatarId} />
        <Button onClick={openDrawer} width={200} borderRadius="0.5rem">
          Change Avatar
        </Button>
        <PickAvatar
          isOpen={isDrawerOpen}
          onClose={closeDrawer}
          setSelectedAvatarId={setSelectedAvatarId}
          userId={userId}
        />
      </Box>
      <Box
        display="flex"
        flexBasis="40%"
        flexDirection="column"
        justifyContent="flex-start"
      >
        <TaskHistory />
      </Box>
      <Box
        display="flex"
        flexBasis="20%"
        flexDirection="column"
        justifyContent="flex-start"
      ></Box>
    </Flex>
  )
}
