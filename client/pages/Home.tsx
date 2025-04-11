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
import { Flex } from '@chakra-ui/react'

const id = 2

export default function Home() {
  const { data: user, isPending, error } = useUserData(id)
  const { data: todos, isPending: todosPending, error: todosError } = useUserTodos(id)
  const navigate = useNavigate()
  const { loginWithPopup } = useAuth0()
  const handleSignIn = () => {
    loginWithPopup()
  }
  const { mutateAsync: updateStatus } = useUpdateStatus()
  const [isComplete, setIsComplete] = useState(false)

  if (isPending || todosPending) {
    return <h2>Loading...</h2>
  }
  if (error || todosError) {
    return <h2>Error: {error?.message}</h2>
  }
  if (!user || user.id === undefined || user.avatarId === undefined) {
    return <h2>No user data found</h2>
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
      <>
        <h2> you &apos;re all caught up</h2>
        <p>Pat yourself on the back</p>
        <button onClick={handleSignIn}>Add Todo</button>
      </>
    )

  }

  return (
    <>
      <IfAuthenticated>
        <h1>Home Page Component placeholder</h1>
        <OneHeckle
          userId={user.id}
          avatarId={user.avatarId}
          urgency={randomTodo?.urgency}
        />
        < HomePageAvatar avatarId={user.avatarId} />
        <Flex gap={2}>
          <input
            type="checkbox"
            checked={isComplete}
            onChange={() => handleCheck(randomTodo.id)}
          />
          <OneTodo todo={randomTodo} />
        </Flex>
        <button onClick={() => navigate(`/todo-list`)}>Add Todo</button>
      </IfAuthenticated>
      <IfNotAuthenticated>
        <button onClick={handleSignIn}>Add Todo</button>
        <p>Sign in to see your data</p>
      </IfNotAuthenticated>
    </>
  )
}
