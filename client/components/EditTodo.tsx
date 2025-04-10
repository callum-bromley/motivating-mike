import { useEditTodo } from '../apis/use-edit-todo'
import { useState } from 'react'

import { Todo } from '../models/todos'

const initialState = { task: '', urgency: 0 }

export interface Props {
  todo: Todo
  editId: number
  onSave: () => void
}

function EditTodo({ todo, onSave, editId }: Props) {
  const [formState, setFormState] = useState({ task: todo.task, urgency: 0 })
  const addTodoMutation = useEditTodo(todo.id)
  console.log(todo)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    addTodoMutation.mutate(
      {
        task: formState.task,
        urgency: Number(formState.urgency),
      },
      {
        onSuccess: () => {
          setFormState(initialState)
          if (editId === todo.id) {
            onSave()
          }
        },
      },
    )
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputText = event.target.value
    console.log(inputText)
    setFormState({ ...formState, [event.target.name as string]: inputText })
  }
  const handleBlur = (event: React.FormEvent<HTMLFormElement>) => {
    if (formState.task !== todo.task) {
      handleSubmit(event)
    }
  }
  // const handleKeyDown = async (e: React.KeyboardEvent<HTMLInputElement>) => {
  //   if (e.key === 'Enter') {
  //     e.preventDefault()
  //     addTodoMutation.mutate({
  //       task: formState.task,
  //       urgency: Number(formState.urgency)
  //     })
  //     await handleBlur()
  // setFormState(initialState)

  //   }
  // }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="task"></label>
      <input
        type="text"
        name="task"
        id="task"
        value={formState.task}
        onChange={handleChange}
        onBlur={handleBlur}
        // onKeyDown={handleKeyDown}
      />
      <button type="submit">Update Todo</button>
    </form>
  )
}

export default EditTodo
