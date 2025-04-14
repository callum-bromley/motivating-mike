import useUserDataAuth from '../apis/use-user-data-auth'
import { useAuth0 } from '@auth0/auth0-react'
import { useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// import { useUpdateStatus } from '../apis/use-update-status'

import HomePageAvatar from '../components/HomePageAvatar'
import OneTodo from '../components/OneTodo'
import DopamineHit from '../components/DopamineHit'
import Procrastinate from '../components/Procrastinate'
import {
  IfAuthenticated,
  IfNotAuthenticated,
} from '../components/Authenticated'

import { Box, Button, Flex, Spinner } from '@chakra-ui/react'
import OneHeckle from '../components/OneHeckle'

// import ConfettiExplosion from 'react-confetti-explosion'

export default function Home() {
  const { data: userData, isPending, error } = useUserDataAuth()
  const { loginWithPopup } = useAuth0()
  // const navigate = useNavigate()
  // const { mutateAsync: updateStatus } = useUpdateStatus()
  // const [isComplete, setIsComplete] = useState(false)
  // const [isExploding, setIsExploding] = useState(false)
  const [showDopamineHit, setShowDopamineHit] = useState(false)
  const [showProcrastinate, setShowProcrastinate] = useState(false)

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

  // -- Event handlers -- //
  const handleSignIn = () => {
    loginWithPopup()
  }

  const toggleDopamineHit = () => {
    setShowDopamineHit((prev) => !prev)
  }

  const toggleProcratinate = () => {
    setShowProcrastinate((prev) => !prev)
  }
  // const handleCheck = async (id: number) => {
  //   if (randomTodo) {
  //     setIsExploding(true)
  //     await updateStatus({
  //       id,
  //     })
  //     setIsComplete(false)

  //     setTimeout(() => {
  //       setIsExploding(false)
  //     }, 3000)
  //   }
  // }

  // if (!randomTodo) {
  //   return (
  //     <Box
  //       height="100vh"
  //       flex="1"
  //       flexDir="column"
  //       backgroundColor="#B1CFB7"
  //       display="flex"
  //       justifyContent="center"
  //       alignItems="center"
  //     >
  //       <h2>you &apos;re all caught up</h2>
  //       <p>Pat yourself on the back</p>
  //       <Button onClick={() => navigate(`/todo-list`)}>Add Todo</Button>
  //     </Box>
  //   )
  // }
  //Current accepted lines 27-43
  // <OneHeckle
  //   userId={userData?.id}
  //   avatarId={userData?.avatarId}
  //   urgency={randomTodo?.urgency}
  // />
  // <HomePageAvatar avatarId={userData?.avatarId} />
  // <Flex gap={2}>
  //   {isExploding && <ConfettiExplosion />}
  //   <input
  //     type="checkbox"
  //     checked={isComplete}
  //     onChange={() => handleCheck(randomTodo.id)}
  //   />
  //   <OneTodo todo={randomTodo} />
  // </Flex>
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
            {/* Avatar at top */}
            <Box position="relative" display="inline-block">
              <Box boxSize="150px" borderRadius="full" overflow="hidden">
                <HomePageAvatar avatarId={userData.avatarId} />
              </Box>
              <Box
                position="absolute"
                bottom="100%"
                left="50%"
                transform="translateX(-50%)"
                mb={2}
              >
                <OneHeckle
                  userId={userData.id}
                  avatarId={userData.avatarId}
                  urgency={3}
                />
              </Box>
            </Box>

            {/* Main content box */}
            <Box
              bg="white"
              p={6}
              borderRadius="lg"
              boxShadow="lg"
              minW="300px"
              maxW="90vw"
              textAlign="center"
            >
              {showProcrastinate ? (
                <Procrastinate userId={userData.id} />
              ) : showDopamineHit ? (
                <DopamineHit userId={userData.id} />
              ) : (
                <OneTodo userId={userData.id} />
              )}
            </Box>

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
