import { Button, Input, VStack } from '@chakra-ui/react'
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
      <VStack>
        <label htmlFor="task" aria-label="Add task"></label>
        <Input
          placeholder="What next"
          type="text"
          name="task"
          id="task"
          value={formState.task}
          onChange={handleChange}
        />
        <Button type="submit">Add Todo</Button>
      </VStack>
    </form>
  )
}

export default AddTodo
