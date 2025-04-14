import useUserDataAuth from '../apis/use-user-data-auth'
import { useAuth0 } from '@auth0/auth0-react'
import { useState } from 'react'
import { Box, Button, Flex, Spinner } from '@chakra-ui/react'
import HomePageAvatar from '../components/HomePageAvatar'
import OneTodo from '../components/OneTodo'
import DopamineHit from '../components/DopamineHit'
import {
  IfAuthenticated,
  IfNotAuthenticated,
} from '../components/Authenticated'

export default function Home() {
  const { data: userData, isPending, error } = useUserDataAuth()
  const { loginWithPopup } = useAuth0()
  const [showDopamineHit, setShowDopamineHit] = useState(false)

  const handleSignIn = () => {
    loginWithPopup()
  }

  const toggleDopamineHit = () => {
    setShowDopamineHit((prev) => !prev)
  }

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

  if (error || !userData) {
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
        <h2>No user data found</h2>
      </Box>
    )
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
    >
      <IfAuthenticated>
        {userData && <HomePageAvatar avatarId={userData.avatarId} />}
        <Flex gap={2}>
          {showDopamineHit ? (
            <DopamineHit userId={userData.id} />
          ) : (
            <OneTodo userId={userData.id} />
          )}
        </Flex>
        <Button onClick={toggleDopamineHit}>
          {showDopamineHit ? 'Get Real' : 'Dopamine Hit'}
        </Button>
      </IfAuthenticated>
      <IfNotAuthenticated>
        <Button onClick={handleSignIn}>Add Todo</Button>
        <p>Sign in to see your data</p>
      </IfNotAuthenticated>
    </Box>
  )
}
