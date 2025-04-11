import { useState } from 'react'
import { useUpdateStatus } from '../apis/use-update-status'
import useUserData from '../apis/use-user-data'
import useUserTodos from '../apis/use-user-todos'
import OneHeckle from '../components/OneHeckle'
import filterTodos from '../components/filteredTodos'
import HomePageAvatar from '../components/HomePageAvatar'
import OneTodo from '../components/OneTodo'

const id = 1

export default function Home() {
  const { data: user, isPending, error } = useUserData(id)
  const {
    data: todos,
    isPending: todosPending,
    error: todosError,
  } = useUserTodos(id)
  const { mutateAsync: updateStatus } = useUpdateStatus()

  const [isComplete, setIsComplete] = useState(false)

  const handleCheck = async (id: number) => {
    if (randomTodo) {
      await updateStatus({
        id,
      })
      setIsComplete(false)
    }
  }

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
      <h1>Home Page Component placeholder</h1>
      {randomTodo && (
        <OneHeckle
          userId={user.id}
          avatarId={user.avatarId}
          urgency={randomTodo?.urgency}
        />
      )}
      <HomePageAvatar avatarId={user.avatarId} />
      {randomTodo && <OneTodo todo={randomTodo} />}
      {randomTodo && (
        <input
          type="checkbox"
          checked={isComplete}
          onChange={() => handleCheck(randomTodo.id)}
        />
      )}
    </>
  )
}
