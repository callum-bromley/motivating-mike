import useUserTodos from "../apis/use-user-todos"
import formatDate from "../utils/formatDate"
import FilterTodos from "./FilterTodos"
import { useNavigate } from "react-router-dom"

interface Props {
  userId: number
}

export default function OneTodo(props: Props) {
  const navigate = useNavigate()

  const { data: todos, isPending, error } = useUserTodos(props.userId)


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
  const dueDate = formatDate(randomTodo?.due as string)

  return (
    <>
      {randomTodo ? (
        <>
          <h3><strong>{randomTodo.task}</strong></h3>
          <h4>{`due - ${dueDate}`}</h4>
        </>
      ) : (
        <>

          <h4>You&apos;r all caught up!</h4>
          <button onClick={() => navigate(`/todo-list`)}> Add Todo</button>
        </>
      )
      }
    </>
  )
}

