import useUserTodos from '../apis/use-user-todos'
import { Todo } from '../models/todos'
import DisplayHeckle from './DisplayHeckle'
import FilterTodos from './FilterTodos'
import { useNavigate } from 'react-router-dom'
interface Props {
  userId: number
  name: string
  avatarId: number
}

export default function OneTodo(props: Props) {
  const navigate = useNavigate()
  const { data: todos, isPending, error } = useUserTodos(props.userId)

  if (isPending) {
    return <h2>Loading...</h2>
  }
  if (error) {
    return <h2>Error: {error.message}</h2>
  }
  if (!todos) {
    return <h2>No todo data found</h2>
  }

  //FilteredTodos Component Call
  const randomTodo = FilterTodos(todos)

  return (
    <>
      {randomTodo ? (
        <>
          <DisplayHeckle
            userId={props.userId}
            avatarId={props.avatarId}
            urgency={randomTodo.urgency}
          />

          <h3>
            <strong>{randomTodo.task}</strong>
          </h3>
        </>
      ) : (
        <>
          <h4>You&apos;r all caught up!</h4>
          <button onClick={() => navigate(`/todo-list`)}> Add Todo</button>
        </>
      )}
    </>
  )
}
