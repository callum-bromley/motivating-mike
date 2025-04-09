import { useAddTodo } from '../apis/use-add-todo'
import { useState } from 'react'

const initialState = { task: '', urgency: '' }

function AddTodo() {
  const [formState, setFormState] = useState(initialState)

  const addTodoMutation = useAddTodo()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    addTodoMutation.mutate({
      task: formState.task,
      urgency: formState.urgency,
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

export default AddTodo
