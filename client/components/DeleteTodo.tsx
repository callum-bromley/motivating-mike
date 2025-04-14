import { Todo } from '../models/todos'
import { useDeleteTodo } from '../apis/use-delete-todo'
import { useState } from 'react'
import { DeleteIcon } from '@chakra-ui/icons'
import { ListIcon } from '@chakra-ui/react'

const initialState = { task: '', urgency: 0 }

export interface Props {
  todos: Todo[]
}

function DeleteTodo(props: Props) {
  const [formState, setFormState] = useState(initialState)

  const deleteTodoMutation = useDeleteTodo()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const todo = props.todos.find((todo) => todo.task == formState.task)
    if (todo) {
      deleteTodoMutation.mutate(todo.id)
      setFormState(initialState)
    }
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputText = event.target.value
    setFormState({ ...formState, [event.target.name as string]: inputText })
  }

  function handleClick(id: any) {
    throw new Error('Function not implemented.')
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="task">Task: </label>

      <input
        type="text"
        name="task"
        id="task"
        value={formState.task}
        onChange={handleChange} // Call handleChange on input change
      />
      <button type="submit"></button>
    </form>
  )
}

export default DeleteTodo
