import { useNavigate } from 'react-router-dom'
import { Todo } from '../models/todos'

interface Props {
  todo: Todo
}

export default function OneTodo(props: Props) {
  const navigate = useNavigate()


  return (
    <>
      {props ? (
        <h3>
          <strong>{props.todo.task}</strong>
        </h3>
      ) : (
        <>
          <h4>You&apos;r all caught up!</h4>
          <button onClick={() => navigate(`/todo-list`)}> Add Todo</button>
        </>
      )}
    </>
  )
}
