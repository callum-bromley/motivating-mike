import { useState } from 'react'
import { Box, Button, Flex, Spinner } from '@chakra-ui/react'
import PickAvatar from '../components/PickAvatar'
import TaskHistory from '../components/TaskHistory'
import UserProfile from '../components/UserProfile'
import { IfAuthenticated, IfNotAuthenticated } from '../components/Authenticated'
import useUserDataAuth from '../apis/use-user-data-auth'
import { useAuth0 } from '@auth0/auth0-react'



export default function UserHomePage() {
  const { data: userData, isPending, error } = useUserDataAuth()
  const { loginWithPopup } = useAuth0()

  const [selectedAvatarId, setSelectedAvatarId] = useState<number | null | undefined>(userData?.avatarId)
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const openDrawer = () => setIsDrawerOpen(true)
  const closeDrawer = () => setIsDrawerOpen(false)

  if (isPending) {
    return (
      <Box
        height="100vh"
        flex="1"
        flexDir="column"
        backgroundColor="#B1CFB7"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <h2>Loading profile</h2>
        <Spinner />
      </Box>
    )
  }

  if (error) {
    <Box
      height="100vh"
      flex="1"
      flexDir="column"
      backgroundColor="#B1CFB7"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      return <h2>Error: {error.message}</h2>
    </Box>
  }
  if (
    !userData ||
    userData.id === undefined
  ) {
    <Box
      height="100vh"
      flex="1"
      flexDir="column"
      backgroundColor="#B1CFB7"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      return <h2>No user data found</h2>
    </Box>
  }

  // -- Event handlers -- //
  const handleSignIn = () => {
    loginWithPopup()
  }

  return (
    <>
      <IfAuthenticated>
        <Flex
          direction={['column', 'row']}
          justify="space-between"
          align="flex-start"
          px={[4, 8]}
          py={8}
          gap={[8, 4]}
          bg="#FAF9F6"
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
            <UserProfile userId={userData?.id} selectedAvatarId={userData?.avatarId} />
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
          >
            <TaskHistory userId={userData?.id} />
          </Box>

          {/* Right Panel (optional/empty) */}
          {/* <Box flexBasis="20%" /> */}

          <PickAvatar
            isOpen={isDrawerOpen}
            onClose={closeDrawer}
            setSelectedAvatarId={setSelectedAvatarId}
            userId={userData?.id}
          />
        </Flex>
        {/* <Button onClick={() => navigate(`/todo-list`)}>Add Todo</Button> */}
      </IfAuthenticated >
      <IfNotAuthenticated>
        <Button onClick={handleSignIn}>Add Todo</Button>
        <p>Sign in to see your data</p>
      </IfNotAuthenticated>
    </>
  )
}

