import useUserTodos from '../apis/use-user-todos'
import useUserDataAuth from '../apis/use-user-data-auth'
import { Box, Spinner } from '@chakra-ui/react'
import OneHeckle from './OneHeckle'
import { useNavigate } from 'react-router-dom'

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
          <h3>
            <strong>{randomTodo.task}</strong>
          </h3>
          <OneHeckle
            userId={userData.id}
            avatarId={userData.avatarId}
            urgency={randomTodo?.urgency}
          />
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
