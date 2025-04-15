import useUserDataAuth from '../apis/use-user-data-auth'
import { useAuth0 } from '@auth0/auth0-react'
import { useEffect, useState } from 'react'
import Complete from '../components/CompleteButton'

import OneTodo from '../components/OneTodo'
import DopamineHit from '../components/DopamineHit'
import Procrastinate from '../components/Procrastinate'
import { IfAuthenticated } from '../components/Authenticated'

import { Box, Button, Flex, Spinner, VStack } from '@chakra-ui/react'
import ConfettiExplosionEffect from '../components/ConfettiExplosion'
// import OneHeckle from '../components/OneHeckle'

// import ConfettiExplosion from 'react-confetti-explosion'

export default function Home() {
  const { data: userData, isPending, error } = useUserDataAuth()
  const { isAuthenticated, loginWithRedirect } = useAuth0()

  const [showDopamineHit, setShowDopamineHit] = useState(false)
  const [showProcrastinate, setShowProcrastinate] = useState(false)
  const [isComplete, setIsComplete] = useState(false)
  const [isExploding, setIsExploding] = useState(false)
  const [stopLoading, setStopLoading] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setStopLoading(true)
    }, 1500)

    return () => clearTimeout(timeout)
  }, [])

  const handleSignIn = () => {
    loginWithRedirect()
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
  if (isPending && !stopLoading) {
    return (
      <Box height="100vh" backgroundColor="#B1CFB7">
        <Flex height="100%" align="center" justify="center">
          <VStack>
            <h2>Loading profile</h2>
            <Spinner />
          </VStack>
        </Flex>
      </Box>
    )
  }

  // -- IfNotAuthenticated Path -- //
  if (!isAuthenticated && stopLoading) {
    return (
      <Box height="100vh" backgroundColor="#B1CFB7">
        <Flex height="100%" align="center" justify="center">
          <VStack>
            <Button onClick={handleSignIn}>Sign In</Button>
            <p>Sign in to see your data</p>
          </VStack>
        </Flex>
      </Box>
    )
  }

  if (
    !userData ||
    userData.id === undefined ||
    userData.avatarId === undefined
  ) {
    return (
      <Box height="100vh" backgroundColor="#B1CFB7">
        <Flex height="100%" align="center" justify="center">
          <VStack>
            <Button onClick={handleSignIn}>Sign In</Button>
            <h2>No user data found</h2>
          </VStack>
        </Flex>
      </Box>
    )
  }

  if (error) {
    return (
      <Box height="100vh" backgroundColor="#B1CFB7">
        <Flex height="100%" align="center" justify="center">
          <VStack>
            <h2>Error: {error}</h2>
          </VStack>
        </Flex>
      </Box>
    )
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
            ) : isComplete ? (
              <Complete userId={userData.id} />
            ) : (
              <OneTodo userId={userData.id} />
            )}

            <ConfettiExplosionEffect isExploding={isExploding} />

            {/* Action buttons */}
            <Flex gap={4}>
              <Button onClick={toggleDopamineHit}>
                {showDopamineHit ? 'Get Real' : 'Dopamine Hit'}
              </Button>
              <Button onClick={toggleProcratinate}>
                {showProcrastinate ? "I'm sorry!" : 'Procrastinate'}
              </Button>
              <Button onClick={toggleComplete}>
                <p>Complete!</p>
                {isComplete}
              </Button>
            </Flex>
          </Box>
        )}
      </IfAuthenticated>
    </Box>
  )
}
