import useUserTodos from "../apis/use-user-todos"
import FilterTodos from "./FilterTodos"


export default function OneTodo() {

  const userId = 1
  const { data: todos, isPending, error } = useUserTodos(userId)
  console.log('before filter ', todos)

  if (isPending) {
    return (<h2>Loading...</h2>)
  }
  if (error) {
    return (<h2>Error: {error.message}</h2>)
  }
  if (!todos) {
    return (<h2>No todo data found</h2>)
  }

  //FilteredTodos Component Call
  const randomTodo = FilterTodos(todos)

  return (
    <>
      {randomTodo ? (
        <>
          <h3><strong>{randomTodo.task}</strong></h3>
        </>
      ) : (
        <>
          <button>Add todo</button>
          <p>You&apos;r all caught up!</p>
        </>
      )}
    </>
  )
}

