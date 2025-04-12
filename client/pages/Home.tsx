import useUserData from '../apis/use-user-data'
import useUserTodos from '../apis/use-user-todos'
import { useUpdateStatus } from '../apis/use-update-status'
import { useAuth0 } from '@auth0/auth0-react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import filterTodos from '../components/filteredTodos'
import OneHeckle from '../components/OneHeckle'
import HomePageAvatar from '../components/HomePageAvatar'
import OneTodo from '../components/OneTodo'
import { IfAuthenticated, IfNotAuthenticated } from '../components/Authenticated'
import { Box, Button, Flex } from '@chakra-ui/react'
import useUserDataAuth from '../apis/use-user-data-auth'

// const id = 1

export default function Home() {
  // const { data: user, isPending, error } = useUserData(id)
  const {
    data: userData,
    isPending: userPending,
    error: userError } = useUserDataAuth()
  console.log(userData)
  const { data: todos, isPending: todosPending, error: todosError } = useUserTodos(userData.id)
  const { loginWithPopup } = useAuth0()
  const navigate = useNavigate()

  const { mutateAsync: updateStatus } = useUpdateStatus()
  const [isComplete, setIsComplete] = useState(false)

  // if (isPending || todosPending || userPending) {
  if (todosPending || userPending) {
    return <h2>Loading...</h2>
  }
  // if (error || todosError || userError) {
  if (todosError || userError) {
    return <h2>Error: {todosError?.message}</h2>
  }
  // if (!user || user.id === undefined || user.avatarId === undefined || !userData) {
  if (!userData) {
    return <h2>No user data found</h2>
  }


  // -- Event handlers -- //
  const handleSignIn = () => {
    loginWithPopup()
  }

  const handleCheck = async (id: number) => {
    if (randomTodo) {
      await updateStatus({
        id,
      })
      setIsComplete(false)
    }
  }
  const randomTodo = filterTodos(todos)

  if (!randomTodo) {
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
        <h2> you &apos;re all caught up</h2>
        <p>Pat yourself on the back</p>
        <Button onClick={() => navigate(`/todo-list`)} >Add Todo</Button>
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
        <OneHeckle
          userId={userData.id}
          avatarId={userData.avatarId}
          urgency={randomTodo?.urgency}
        />
        < HomePageAvatar avatarId={userData.avatarId} />
        <Flex gap={2}>
          <input
            type="checkbox"
            checked={isComplete}
            onChange={() => handleCheck(randomTodo.id)}
          />
          <OneTodo todo={randomTodo} />
        </Flex>
        {/* <Button onClick={() => navigate(`/todo-list`)}>Add Todo</Button> */}
      </IfAuthenticated>
      <IfNotAuthenticated>
        <Button onClick={handleSignIn}>Add Todo</Button>
        <p>Sign in to see your data</p>
      </IfNotAuthenticated>
    </Box>
  )
}
