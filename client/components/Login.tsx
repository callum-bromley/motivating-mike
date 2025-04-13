import React, { useState } from 'react'
import {
  Box,
  Button,
  Center,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  FormControl,
  FormLabel,
  Image,
  Input,
  Link,
  Stack,
  Text,
  useDisclosure,
} from '@chakra-ui/react'
import { useNavigate, useOutletContext } from 'react-router-dom'
import useAddUser from '../apis/use-add-user'

function Login() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
  const [name, setName] = useState('')
  const addUser = useAddUser()
  const navigate = useNavigate()
  const { updateUsername } = useOutletContext()

  const handleChange = (event) => {
    setName(event.target.value)
  }

  const handleClick = async () => {
    if (name.trim() === '' || name === 'Unknown user') {
      return
    }

    try {
      await updateUsername(name)
      const userResponse = await addUser.mutateAsync({ id: name, name })

      navigate(`/profile/${userResponse.id}`)
    } catch (error) {
      console.error('Error adding user:', error)
    }
  }

  return (
    <>
      <Center>
        <Button marginTop={12} ref={btnRef} colorScheme="gray" onClick={onOpen}>
          Login
        </Button>
      </Center>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Login</DrawerHeader>

          <DrawerBody>
            <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
              <Stack spacing={4}>
                <FormControl id="name" isRequired>
                  <FormLabel>Name</FormLabel>
                  <Input
                    type="text"
                    value={name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                  />
                </FormControl>
                <Button
                  bg={'blue.600'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}
                  onClick={handleClick}
                >
                  Sign in
                </Button>
              </Stack>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      <Box
        as="figure"
        textAlign="center"
        display="flex"
        flexDir="column"
        alignItems="center"
        m={12}
      >
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/1/1d/Gerrit_Zegelaar_-_Hay_Farmer.jpg"
          alt="Painting of man eating breakfast and tea, holding his spoon with a raised pinky finger"
        />
        <Text as="figcaption" mt={2} fontSize="sm">
          Painting by {''}
          <Link
            href="https://commons.wikimedia.org/wiki/File:Gerrit_Zegelaar_-_Hay_Farmer.jpg"
            isExternal
            color={'gray.500'}
          >
            Gerrit Zegelaar
          </Link>{' '}
          , Public domain, via Wikimedia Commons
        </Text>
      </Box>
    </>
  )
}

export default Login
