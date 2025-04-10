import { useEditTodo } from '../apis/use-edit-todo'
import { useState } from 'react'

import { Todo } from '../models/todos'

const initialState = { task: '', urgency: 0 }

export interface Props {
  todo: Todo
}

function EditTodo({ todo }: Props) {
  const [formState, setFormState] = useState({ task: todo.task, urgency: 0 })
  const addTodoMutation = useEditTodo(todo.id)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    addTodoMutation.mutate({
      task: formState.task,
      urgency: Number(formState.urgency),
    })
    setFormState(initialState)
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputText = event.target.value
    console.log(inputText)
    setFormState({ ...formState, [event.target.name as string]: inputText })
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="task">Task: </label>
      <input
        type="text"
        name="task"
        id="task"
        value={formState.task}
        onChange={handleChange}
      />
      <button type="submit">Add Todo</button>
    </form>
  )
}

export default EditTodo
