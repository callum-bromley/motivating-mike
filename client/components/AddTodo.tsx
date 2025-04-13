import {
  Button,
  Input,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  VStack,
  Text,
} from '@chakra-ui/react'
import { useAddTodo } from '../apis/use-add-todo'
import { useState } from 'react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import DatePicker from './datePicker'

const initialState = { task: '', urgency: '' }

function AddTodo() {
  const [formState, setFormState] = useState(initialState)
  const [dueDate, setDueDate] = useState<Date | null>(null)

  const addTodoMutation = useAddTodo()

  const urgencyMap: Record<string, number> = {
    Chill: 1,
    'Probably should start': 2,
    'Severe(whoops)': 3,
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    addTodoMutation.mutate({
      task: formState.task,
      urgency: urgencyMap[formState.urgency] || 0,
      due: dueDate ? dueDate.toISOString() : '', // convert to string or use empty string
    })
    setFormState(initialState)
    setDueDate(null)
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
            as={Button}
            px={4}
            py={2}
            transition="all 0.2s"
            borderRadius="md"
            borderWidth="1px"
            _hover={{ bg: 'gray.400' }}
            _expanded={{ bg: 'blue.400' }}
            _focus={{ boxShadow: 'outline' }}
          >
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}
            >
              <strong>Urgency:</strong>
              {formState.urgency || '...'}
              <ChevronDownIcon />
            </span>
          </MenuButton>
          <MenuList>
            <MenuItem
              onClick={() => setFormState({ ...formState, urgency: 'Chill' })}
            >
              Chill
            </MenuItem>
            <MenuDivider />
            <MenuItem
              onClick={() =>
                setFormState({ ...formState, urgency: 'Probably should start' })
              }
            >
              Probably should start
            </MenuItem>
            <MenuDivider />
            <MenuItem
              onClick={() =>
                setFormState({ ...formState, urgency: 'Severe(whoops)' })
              }
            >
              Severe(whoops)
            </MenuItem>
          </MenuList>
        </Menu>
        <DatePicker
          selectedDate={dueDate}
          onChange={(date) => setDueDate(date)}
        ></DatePicker>
        {/* <Input
          placeholder="Set Due Date"
          type="text"
          name="task"
          id="task"
          value={formState.due}
          onChange={handleChange}
        /> */}
        <Button type="submit">Add Todo</Button>
      </VStack>
    </form>
  )
}

export default AddTodo
