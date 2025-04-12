import { ChevronDownIcon } from '@chakra-ui/icons'
import { useAddTodo } from '../apis/use-add-todo'
import AddTodo from './AddTodo'

import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
  Heading,
  Menu,
  MenuButton,
} from '@chakra-ui/react'

function RefillForm() {
  return (
    <Box maxW="md" mx="auto" mt={10} p={6} boxShadow="lg" borderRadius="lg">
      <Heading mb={6} fontSize="2xl" textAlign="center">
        Add Todo optional form
      </Heading>
      <form>
        <VStack spacing={4}>
          <FormControl>
            <FormLabel>Task</FormLabel>
            <Input placeholder="e.g. Water Bottles" />
          </FormControl>
          <FormControl>
            <FormLabel>Due</FormLabel>
            <Input type="number" placeholder="How many?" />
          </FormControl>
          <Button colorScheme="blue" type="submit">
            Refill
          </Button>
        </VStack>
      </form>
    </Box>
  )
}

export default RefillForm
