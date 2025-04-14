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
    <Box
      height="100vh"
      flex="1"
      flexDir="column"
      backgroundColor="#B1CFB7"
      display="flex"
      justifyContent="center"
      alignItems="center"
      overflow="auto"
    >
      <IfAuthenticated>
        <Flex>
          <Box
            display="flex"
            flexBasis="40%"
            flexDirection="column"
            justifyContent="flex-start"
          >
            <UserProfile userId={userData?.id} selectedAvatarId={userData?.avatarId} />
            <Button onClick={openDrawer} width={200} borderRadius="0.5rem">
              Change Avatar
            </Button>
            <PickAvatar
              isOpen={isDrawerOpen}
              onClose={closeDrawer}
              setSelectedAvatarId={setSelectedAvatarId}
              userId={userData.id}
            />
          </Box>
          <Box
            display="flex"
            flexBasis="40%"
            flexDirection="column"
            justifyContent="flex-start"
          >
            <TaskHistory userId={userData?.id} />
          </Box>
          <Box
            display="flex"
            flexBasis="20%"
            flexDirection="column"
            justifyContent="flex-start"
          ></Box >
        </Flex >
        {/* <Button onClick={() => navigate(`/todo-list`)}>Add Todo</Button> */}
      </IfAuthenticated >
      <IfNotAuthenticated>
        <Button onClick={handleSignIn}>Add Todo</Button>
        <p>Sign in to see your data</p>
      </IfNotAuthenticated>
    </Box >
  )
}

