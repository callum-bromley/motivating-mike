import useUserData from '../apis/use-user-data'
import useUserTodos from '../apis/use-user-todos'
import OneHeckle from '../components/OneHeckle'
import filterTodos from '../components/filteredTodos'
import HomePageAvatar from '../components/HomePageAvatar'
import OneTodo from '../components/OneTodo'
import { IfAuthenticated, IfNotAuthenticated } from '../components/Authenticated'
// import { useAuth0 } from '@auth0/auth0-react'

const id = 1

export default function Home() {
  const { data: user, isPending, error } = useUserData(id)
  const { data: todos, isPending: todosPending, error: todosError } = useUserTodos(id)
  // const { getAccessTokenSilently } = useAuth0()

  if (isPending || todosPending) {
    return <h2>Loading...</h2>
  }
  if (error || todosError) {
    return <h2>Error: {error?.message}</h2>
  }
  if (!user) {
    return <h2>No user data found</h2>
  }

  const randomTodo = filterTodos(todos)

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
        <OneTodo todo={randomTodo} />
      </IfAuthenticated>
      <IfNotAuthenticated>
        <p>Sign in to see your data</p>
      </IfNotAuthenticated>
    </>
  )
}
