import { useEditTodo } from '../apis/use-edit-todo'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

const initialState = { task: '', urgency: '' }

function EditTodo() {
  const [formState, setFormState] = useState(initialState)
  
    const addTodoMutation = useEditTodo()
  
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
