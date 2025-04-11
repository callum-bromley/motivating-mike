import {
  Button,
  Input,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  VStack,
} from '@chakra-ui/react'
import { useAddTodo } from '../apis/use-add-todo'
import { useState } from 'react'
import { ChevronDownIcon } from '@chakra-ui/icons'

const initialState = { task: '', urgency: '' }

function AddTodo() {
  const [formState, setFormState] = useState(initialState)

  const addTodoMutation = useAddTodo()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    addTodoMutation.mutate({
      task: formState.task,
      urgency: Number(formState.urgency),
      due: formState.due,
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
        <Menu>
          <MenuButton
            px={4}
            py={2}
            transition="all 0.2s"
            borderRadius="md"
            borderWidth="1px"
            _hover={{ bg: 'gray.400' }}
            _expanded={{ bg: 'blue.400' }}
            _focus={{ boxShadow: 'outline' }}
          >
            Urgency <ChevronDownIcon />
          </MenuButton>
          <MenuList>
            <MenuItem>Chill</MenuItem>
            <MenuItem>Probably should start</MenuItem>
            <MenuDivider />
            <MenuItem>Severe(whoops)</MenuItem>
          </MenuList>
        </Menu>
        <Input
          placeholder="Set Due Date"
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
