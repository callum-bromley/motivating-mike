import useUserTodos from '../apis/use-user-todos'
import useUserDataAuth from '../apis/use-user-data-auth'
import { Box, Button, Spinner, VStack } from '@chakra-ui/react'
import OneHeckle from './OneHeckle'
import { useNavigate } from 'react-router-dom'
import ConfettiExplosionEffect from './ConfettiExplosion'
import useUpdateTodoStatus from '../apis/use-update-status'
import { useState } from 'react'

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
  const updateStatus = useUpdateTodoStatus()
  const [isExploding, setIsExploding] = useState(false)
  const [showComplete, setShowComplete] = useState(false)

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

  const handleComplete = () => {
    if (!showComplete && randomTodo) {
      setIsExploding(true)
      setTimeout(() => setIsExploding(false), 3000)
      updateStatus.mutate(randomTodo.id)
    }
    setShowComplete((prev) => !prev)
  }

  return (
    <VStack>
      {showComplete ? (
        <OneHeckle
          userId={userData.id}
          avatarId={userData.avatarId}
          urgency={0}
        />
      ) : randomTodo ? (
        <>
          <h3>
            <strong>{randomTodo.task}</strong>
          </h3>
          <OneHeckle
            userId={userData.id}
            avatarId={userData.avatarId}
            urgency={randomTodo.urgency}
          />
        </>
      ) : (
        <>
          <h4>You&apos;re all caught up!</h4>
          <Button onClick={() => navigate(`/todo-list`)} colorScheme="teal">
            Add Todo
          </Button>
        </>
      )}
      <ConfettiExplosionEffect isExploding={isExploding} />
      <Button onClick={handleComplete}>
        {showComplete ? 'Smash Another Task!' : 'Complete!'}
      </Button>
    </VStack>
  )
}
