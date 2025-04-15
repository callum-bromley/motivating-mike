import useUserTodos from '../apis/use-user-todos'
import useUserDataAuth from '../apis/use-user-data-auth'
import { Box, Spinner, List } from '@chakra-ui/react'
import OneHeckle from './OneHeckle'
import { useNavigate } from 'react-router-dom'
import HomePageAvatar from './HomePageAvatar'


interface Props {
  userId: number
}

export default function DopamineHit({ userId }: Props) {
  const navigate = useNavigate()
  const { data: userData, isPending, error } = useUserDataAuth()
  const {
    data: todos,
    isPending: todosPending,
    error: todosError,
  } = useUserTodos(userId)

  if (isPending || todosPending) {
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

  if (error || todosError || !userData) {
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
        <h2>{todosError?.message || 'No user data found'}</h2>
      </Box>
    )
  }

  const minUrgency = Math.min(
    ...todos.filter((todo) => todo.urgency > 0).map((todo) => todo.urgency),
  )
  const filteredTodos = todos.filter((todo) => todo.urgency === minUrgency)
  const randomTodo =
    filteredTodos.length > 0
      ? filteredTodos[Math.floor(Math.random() * filteredTodos.length)]
      : null

  return (
    <>
      {randomTodo ? (
        <>
        <Box
            position="relative"
            transform="translateX(40%)"
           
            mb={2}
          >
        <OneHeckle
            userId={userData.id}
            avatarId={userData.avatarId}
            urgency={randomTodo?.urgency}
          />
          </Box>
          <Box position="relative" display="inline-block">
          <Box boxSize="150px" borderRadius="full" overflow="hidden">
          <HomePageAvatar avatarId={userData.avatarId} />
          </Box>
          </Box>
        <Box
              bg="white"
              p={6}
              borderRadius="lg"
              boxShadow="lg"
              minW="300px"
              maxW="90vw"
              textAlign="center"
            >
          <h3>
                      <List
                        bg="yellow.50"
                        border="1px solid #ccc"
                        borderRadius="md"
                        px={4}
                        py={2}
                        boxShadow="md"
                        backgroundSize="100% 30px"
                        whiteSpace="pre-wrap"
                        width="100%"
                        maxHeight="60vh"
                        
                        backgroundAttachment="local"
                        spacing={0}
                        fontSize="md"
                        lineHeight="30px"
                        fontFamily="'Courier New', monospace"
                      >
                        <strong>{randomTodo.task}</strong>
                      </List>
                    </h3>
          </Box>
          
        </>
      ) : (
        <>
          <h4>You&apos;re all caught up!</h4>
          <button onClick={() => navigate(`/todo-list`)}>Add Todo</button>
        </>
      )}
    </>
  )
}
