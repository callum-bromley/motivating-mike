import { Box, Divider, Heading, Icon, Text, VStack } from '@chakra-ui/react'
import useTodos from '../apis/use-todos'
import { FaCheckCircle, FaRegCalendarAlt, FaRegClock } from 'react-icons/fa'

interface Props {
  userId: number | null | undefined
}

export default function TaskHistory({ userId }: Props) {
  const { data: todos, isPending, error } = useTodos()

  const history = todos
    ? todos.filter((todo) => todo.userId === userId && todo.completed !== null)
    : []

  if (isPending) {
    return <Text>Fetching history...</Text>
  }

  if (error) {
    return <Text>Whoops! There was a problem fetching history.</Text>
  }

  if (history.length === 0) {
    return <Text>No completed tasks found for this user.</Text>
  }

  return (
    <Box
      bg="white"
      p={6}
      borderRadius="2xl"
      boxShadow="xl"
      fontFamily=""
      maxW="600px"
      mx="auto"
      maxHeight="100vh"
    >
      <Box></Box>
      <Heading size="xl" color="black" mb={6} fontFamily="">
        Task History
      </Heading>

      <VStack align="stretch" spacing={6}>
        {history.map((todo) => (
          <Box
            key={todo.id}
            bg="#fff8e1"
            p={4}
            borderRadius="xl"
            borderLeft="6px solid #ef5350"
            shadow="md"
            transition="all 0.2s"
            _hover={{
              transform: 'scale(1.02)',
              boxShadow: 'lg',
              borderLeftColor: '#66bb6a', // green for hover
            }}
          >
            <Text fontWeight="bold" fontSize="lg" color="#4fc3f7">
              “{todo.task}”
            </Text>
            <Divider my={2} />
            <Text>
              <Icon as={FaRegCalendarAlt} color="gray.500" mr={2} />
              Created: <strong>{todo.created}</strong>
            </Text>
            <Text>
              <Icon as={FaCheckCircle} color="green.400" mr={2} />
              Completed: <strong>{todo.completed}</strong>
            </Text>
            <Text>
              <Icon as={FaRegClock} color="orange.400" mr={2} />
              Due: <strong>{todo.due}</strong>
            </Text>
          </Box>
        ))}
      </VStack>
    </Box>
  )
}
