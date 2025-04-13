import useTodos from '../apis/use-todos'
import AddTodo from '../components/AddTodo'
import DeleteTodo from '../components/DeleteTodo'
import { useState } from 'react'
import EditTodo from '../components/EditTodo'
import Notepad from '../components/Notepad'
import '@fontsource/indie-flower'
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
  Button,
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

import { Link } from 'react-router-dom'

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
          <VStack overflowY="scroll">
            <Box justifyContent="left">
              <Heading as="h3" font-family="Bangers">
                <Notepad>Todos:</Notepad>
              </Heading>
            </Box>
            
    <Box maxHeight="32vh" overflowY="auto"
        bg="yellow.50"
        border="1px solid #ccc"
        borderRadius="md"
        px={4}
        py={2}
        boxShadow="md"
        fontFamily="'Indie Flower', cursive"
        // backgroundImage="linear-gradient(to bottom, transparent 29px, #ccc 30px)"
        backgroundSize="100% 30px"
        whiteSpace="pre-wrap"
        width="100%"
        overflowY="auto"
        maxHeight="60vh"
        backgroundAttachment="local">
    <List
  spacing={0} 
  fontSize="md"
  lineHeight="30px"
  fontFamily="'Courier New', monospace" 
>
        {todos.map((todo) =>
          todo.id === editId ? (
            <EditTodo
              key={todo.task}
              todo={todo}
              editId={editId}
              onSave={() => setEditId(0)}
            />
          ) : (
            <Flex key={todo.id}>
              <UpdateTodoMenu />
              <ListItem borderBottom="1px solid #ccc" pb={2} mb={2}
                onDoubleClick={() => handleClick(todo.id)}
              >
                <Flex w="25vw" alignItems="center">
                  {todo.task}
                </Flex>
              </ListItem>
              <DeleteSingleTodo todoId={todo.id} />
            </Flex>
          )
        )}
      </List>
    </Box>
  
            
            <Box pt={4}>
              <Link to={'/Home'}>
                <Button colorScheme="blue">Lesh go!</Button>
              </Link>
            </Box>
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
            <Image
              src="/funPhotos/pencil-paper.webp"
              alt="A pencil & a book"
              boxSize="110px"
              position="absolute"
              top="25%"
              left="53%"
              zIndex="1"
              width="auto"
            />
            <Image
              src="funPhotos/hammer.webp"
              alt="a hammer"
              boxSize="128px"
              position="absolute"
              top="15%"
              left="29%"
              zIndex="1"
              width="auto"
            />
            <Image
              src="/funPhotos/tree.webp"
              alt="A lovely tree"
              boxSize="280px"
              position="absolute"
              top="70%"
              left="84%"
              zIndex="1"
              width="auto"
            />
            <Image
              src="/funPhotos/bush-2.webp"
              alt="A bush"
              boxSize="150px"
              position="absolute"
              left="5%"
              top="82%"
              zIndex="2"
              width="auto"
            />
            <Image
              src="/funPhotos/bush-1.webp"
              alt="A bush"
              boxSize="150px"
              position="absolute"
              left="10%"
              top="81%"
              zIndex="1"
              width="auto"
            />
            <Image
              src="/funPhotos/bush-3.webp"
              alt="A bush"
              boxSize="150px"
              position="absolute"
              left="2%"
              top="81%"
              zIndex="1"
              width="auto"
            />
            <Image
              src="/funPhotos/squirell.webp"
              alt="A squirell holding an acorn"
              boxSize="120px"
              position="absolute"
              left="9%"
              top="79%"
              zIndex="1"
              width="auto"
            />
          </Box>
        </Flex>
      </Flex>
      {/* <RefillForm></RefillForm> */}
    </>
  )
}
