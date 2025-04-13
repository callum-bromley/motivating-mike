import useUserTodos from '../apis/use-user-todos'
import { useNavigate } from 'react-router-dom'
import ReverseFilterTodos from './ReverseFilterTodos'

interface Props {
  userId: number
}

export default function DopamineHit(props: Props) {
  const navigate = useNavigate()

  const { data: todos, isPending, error } = useUserTodos(props.userId)
  console.log(todos)

  if (isPending) {
    return <h2>Loading...</h2>
  }
  if (error) {
    return <h2>Error: {error.message}</h2>
  }
  if (!todos) {
    return <h2>No todo data found</h2>
  }

  const randomTodo = ReverseFilterTodos(todos)

  return (
    <>
      {randomTodo ? (
        <>
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
