import useUserTodos from '../apis/use-user-todos'
import useUserDataAuth from '../apis/use-user-data-auth'
import { Box, List, Spinner, Text } from '@chakra-ui/react'
import OneHeckle from './OneHeckle'
import { useNavigate } from 'react-router-dom'
import HomePageAvatar from './HomePageAvatar'

interface Props {
  userId: number
}

export default function OneTodo({ userId }: Props) {
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

  const maxUrgency = Math.max(
    ...todos.filter((todo) => todo.urgency > 0).map((todo) => todo.urgency),
  )
  const filteredTodos = todos.filter((todo) => todo.urgency === maxUrgency)
  const randomTodo =
    filteredTodos.length > 0
      ? filteredTodos[Math.floor(Math.random() * filteredTodos.length)]
      : null

  return (
    <>
      {randomTodo ? (
        <>
          <Box position="relative" transform="translateX(40%)" mb={2}>
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

          {/* Movie Ticket Style Todo */}
          <Box
            backgroundColor="#F8F3E6" // Warm pastel parchment
            border="1.5px dashed #D1BEB0" // Soft taupe dashed border
            borderRadius="4px"
            px={5}
            py={3}
            position="relative"
            width="280px"
            textAlign="left"
            fontFamily="'Homemade Apple', cursive" // Handwritten style
            color="#6D5C54" // Muted brown-gray
            boxShadow="0 2px 8px rgba(0,0,0,0.05)"
            lineHeight="1.6"
          >
            {/* Handwritten header */}
            <Text
              fontSize="lg"
              fontWeight="bold"
              mb={2}
              borderBottom="1px dashed #D1BEB0"
              pb={1}
            >
              Current todo
            </Text>

            {/* title - styled like notepad item */}
            <Text fontSize="xl" mb={3} pl={3} position="relative">
              <Box
                as="span"
                position="absolute"
                left={0}
                top="8px"
                w="8px"
                h="8px"
                bg="#D1BEB0"
                borderRadius="50%"
              />
              {randomTodo.task}
            </Text>

            {/* Subtle footer */}
            <Text fontSize="xs" mt={3} textAlign="right" opacity={0.7}>
              Motivating Mike
            </Text>
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
