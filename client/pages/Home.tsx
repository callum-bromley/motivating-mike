import useUserData from '../apis/use-user-data'
import useUserTodos from '../apis/use-user-todos'
import filterTodos from '../components/filteredTodos'
import HomePageAvatar from '../components/HomePageAvatar'

const id = 1

export default function Home() {
  const { data: user, isPending, error } = useUserData(id)
  const { data: todos, isPending: todosPending, error: todosError } = useUserTodos(id)

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
  console.log(randomTodo)
  // I want to use a helper function to go and get
  // - a Todo,
  // - and an appropriate heckle
  // return those two values, so that I can then render them on the page below
  // Then I will pass those into the <OneTodo/> <OneHeckle/> <DisplayAvatar/>
  return (
    <>
      <h1>Home Page Component placeholder</h1>
      < HomePageAvatar avatarId={user.avatarId} />
    </>
  )
}
