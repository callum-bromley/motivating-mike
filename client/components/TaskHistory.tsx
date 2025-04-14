import { Box, Heading, Text } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import useTodos from '../apis/use-todos'

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
    <>
      <Heading>History</Heading>
      <Box paddingBottom={16}>
        {history.map((todo) => (
          <Box key={todo.id}>
            <Text>Task: {todo.task}</Text>
            <Text>Created: {todo.created}</Text>
            <Text>Completed: {todo.completed}</Text>
            <Text>Due: {todo.due}</Text>
          </Box>
        ))}
      </Box>
    </>
  )
}
