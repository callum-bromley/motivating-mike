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
    <Flex
      direction={['column', 'row']}
      justify="space-between"
      align="flex-start"
      px={[4, 8]}
      py={8}
      gap={[8, 4]}
      bg="#4fc3f7"
      minH="100vh"
    >
      {/* Left Panel: Profile + Avatar Change */}
      <Box
        flexBasis={['100%', '35%']}
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap={6}
        bg="white"
        p={6}
        borderRadius="xl"
        boxShadow="lg"
        position="relative"
        top="100px"
      >
        <UserProfile selectedAvatarId={selectedAvatarId} />
        <Button
          onClick={openDrawer}
          width="100%"
          maxW="200px"
          borderRadius="lg"
          colorScheme="teal"
          mt={2}
        >
          Change Avatar
        </Button>
      </Box>

      {/* Middle Panel: Task History */}
      <Box
        flexBasis={['100%', '60%']}
        display="flex"
        flexDirection="column"
        gap={3}
        bg="white"
        p={6}
        borderRadius="xl"
        boxShadow="lg"
        overflowY="auto"
        position="relative"
        top="100px"
        maxHeight="600px"
        marginBottom="1000px"
      >
        <TaskHistory />
      </Box>
      <PickAvatar
        isOpen={isDrawerOpen}
        onClose={closeDrawer}
        setSelectedAvatarId={setSelectedAvatarId}
        userId={userId}
      />
    </Flex>
  )
}
