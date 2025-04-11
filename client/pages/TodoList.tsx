import useTodos from '../apis/use-todos'
import AddTodo from '../components/AddTodo'
import DeleteTodo from '../components/DeleteTodo'
import { useState } from 'react'
import EditTodo from '../components/EditTodo'
import { Box, Flex, List, ListItem, Text, VStack } from '@chakra-ui/react'
// import { extendTheme } from '@chakra-ui/react'

export default function TodoList() {
  const [editId, setEditId] = useState(0)

  const { data: todos, isPending, error } = useTodos()

  if (isPending) {
    return <p>no todos yet</p>
  }
  if (error) {
    return <p>no todos ever</p>
  }

  console.log(editId)

  const handleClick = (id: number) => {
    setEditId(id)
  }
  return (
    <>
      <Flex height="100vh">
        <Box
          flex="1"
          backgroundColor="#B1CFB7"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <AddTodo />
        </Box>
        <Box
          flex="1"
          backgroundColor="#EFD9AA"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <VStack>
            <List color="green.500">
              {todos.map((todo) => {
                {
                  return todo.id == editId ? (
                    <EditTodo
                      key={todo.task}
                      todo={todo}
                      editId={editId}
                      onSave={() => setEditId(0)}
                    />
                  ) : (
                    <ListItem
                      key={todo.task}
                      onClick={() => {
                        handleClick(todo.id)
                      }}
                    >
                      {todo.task}
                    </ListItem>
                  )
                }
              })}
            </List>
            {/* <DeleteTodo todos={todos} /> */}
          </VStack>
        </Box>
        <Flex>
          <Box>
            <Text
              as="h1"
              position="absolute"
              top="10%"
              left="38.5%"
              transform="translate(-10%, -42%)"
              fontSize="9xl"
              color="black"
              fontFamily="Bangers"
              textAlign="center"
              zIndex="1"
            >
              Motivating
            </Text>
          </Box>
          <Box>
            <Text
              as="h1"
              position="absolute"
              top="20%"
              left="59%"
              transform="translate(-10%, -42%)"
              fontSize="8xl"
              color="black"
              fontFamily="Bangers"
              textAlign="center"
              zIndex="1"
            >
              Mike
            </Text>
          </Box>
        </Flex>
      </Flex>
    </>
  )
}

//update

//useState - track task being edited (id)
//When user dbl clicks, the state changes (click handler - on every list item in the map)
//if task id is the clicked task id = show the form.
//ternary on line 25. id = editedId ? show component or list item for the task
