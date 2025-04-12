import useTodos from '../apis/use-todos'
import AddTodo from '../components/AddTodo'
import DeleteTodo from '../components/DeleteTodo'
import { useState } from 'react'
import EditTodo from '../components/EditTodo'
import {
  Box,
  Flex,
  Heading,
  List,
  ListIcon,
  ListItem,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  VStack,
  Image,
} from '@chakra-ui/react'
import { MdCheckCircle } from 'react-icons/md'
import {
  ArrowDownIcon,
  CalendarIcon,
  ChevronDownIcon,
  DeleteIcon,
} from '@chakra-ui/icons'
import UpdateTodoMenu from '../components/UpdateTodoMenu'
import DeleteSingleTodo from '../components/DeleteSingleTodo'

import { keyframes } from '@emotion/react'

// Define the phasing glow animation
const phase = keyframes`
  0% { opacity: 1 }
  50% { opacity: 0.4 }
  100% { opacity: 1 }
`

const animation = `${phase} 3s ease-in-out infinite`

const fadeInOutBlue = keyframes`
  0% { opacity: 1; }
  50% { opacity: 0.4; }
  100% { opacity: 1; }`

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
            <Box justifyContent="left">
              <Heading as="h3" font-family="Recoleta">
                Todos:
              </Heading>
            </Box>
            <List as="h3" fontSize="4xl" color="black" fontFamily="monospace">
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
                    <>
                      <Flex>
                        <UpdateTodoMenu />
                        <ListItem
                          key={todo.task}
                          onDoubleClick={() => {
                            handleClick(todo.id)
                          }}
                        >
                          <Flex w="25vw" alignItems="center">
                            {todo.task}
                          </Flex>
                        </ListItem>
                        <DeleteSingleTodo todoId={todo.id} />
                      </Flex>
                    </>
                  )
                }
              })}
            </List>
          </VStack>
        </Box>
        <Flex>
          <Box>
            <Text
              fontFamily="Bangers"
              fontSize="9xl"
              color="#D7C2DB"
              animation={animation}
              textShadow="0px 0px 10px #D100FF"
              position="absolute"
              top="10%"
              left="38.5%"
              transform="translate(-10%, -42%)"
              zIndex="1"
              textAlign="center"
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
              textShadow="0px 0px 10px #0059b3"
              fontSize="8xl"
              color="#00BFFF" // Neon Blue color
              fontFamily="Bangers"
              textAlign="center"
              zIndex="1"
              // textShadow="0px 0px 10px #00BFFF" // Neon blue text shadow
              animation={`${fadeInOutBlue} 3s ease-in-out infinite`} // Apply the animation
            >
              Mike
            </Text>
            <Image
              src="../public/funPhotos/big-blue-fish.webp"
              alt="A large fish"
              boxSize="82px"
              position="absolute"
              top="14%"
              left="74%"
              zIndex="1"
              width="auto"
            />
          </Box>
        </Flex>
      </Flex>
    </>
  )
}
