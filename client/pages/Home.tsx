import useUserDataAuth from '../apis/use-user-data-auth'
import { useAuth0 } from '@auth0/auth0-react'
import { useState } from 'react'
import Complete from '../components/CompleteButton'

import OneTodo from '../components/OneTodo'
import DopamineHit from '../components/DopamineHit'
import Procrastinate from '../components/Procrastinate'
import {
  IfAuthenticated,
  IfNotAuthenticated,
} from '../components/Authenticated'

import { Box, Button, Flex, Spinner } from '@chakra-ui/react'
import ConfettiExplosionEffect from '../components/ConfettiExplosion'
import OneHeckle from '../components/OneHeckle'

// import ConfettiExplosion from 'react-confetti-explosion'

export default function Home() {
  const { data: userData, isPending, error } = useUserDataAuth()
  const { loginWithPopup } = useAuth0()

  const [showDopamineHit, setShowDopamineHit] = useState(false)
  const [showProcrastinate, setShowProcrastinate] = useState(false)
  const [isComplete, setIsComplete] = useState(false)
  const [isExploding, setIsExploding] = useState(false)

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
        <h2>Error: {error?.message}</h2>
      </Box>
    )
  }

  if (
    !userData ||
    userData.id === undefined ||
    userData.avatarId === undefined
  ) {
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

  const handleSignIn = () => {
    loginWithPopup()
  }

  const toggleDopamineHit = () => {
    setShowDopamineHit((prev) => !prev)
  }

  const toggleProcratinate = () => {
    setShowProcrastinate((prev) => !prev)
  }

  const toggleComplete = () => {
    setIsComplete((prev) => !prev)
    setIsExploding(true)
    setTimeout(() => {
      setIsExploding(false)
    }, 3000)
  }

  return (
    <Box
      height="100vh"
      backgroundColor="#B1CFB7"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <IfAuthenticated>
        {userData && (
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            gap={6}
          >
            {showProcrastinate ? (
              <Procrastinate userId={userData.id} />
            ) : showDopamineHit ? (
              <DopamineHit userId={userData.id} />
            ) : (
              <OneTodo userId={userData.id} />
            )}

            {/* Action buttons */}
            <Flex gap={4}>
              <Button onClick={toggleDopamineHit}>
                {showDopamineHit ? 'Get Real' : 'Dopamine Hit'}
              </Button>
              <Button onClick={toggleProcratinate}>
                {showProcrastinate ? "I'm sorry!" : 'Procrastinate'}
              </Button>
            </Flex>
          </Box>
        )}
      </IfAuthenticated>

      <IfNotAuthenticated>
        <Box textAlign="center">
          <Button onClick={handleSignIn}>Add Todo</Button>
          <p>Sign in to see your data</p>
        </Box>
      </IfNotAuthenticated>
    </Box>
  )
}
