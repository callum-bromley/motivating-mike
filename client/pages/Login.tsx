import { useAuth0 } from '@auth0/auth0-react'
import useUserDataAuth from '../apis/use-user-data-auth'
import { useNavigate } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import '@fontsource/indie-flower'

import {
  Box,
  Button,
  FormLabel,
  Image,
  Input,
  SimpleGrid,
  Text,
} from '@chakra-ui/react'
import {
  IfAuthenticated,
  IfNotAuthenticated,
} from '../components/Authenticated'

type FormState = {
  name: string
  avatarId: number | null
}

const avatars = [
  { id: 1, src: '/images/avatars/mike.WebP' },
  { id: 2, src: '/images/avatars/mandy.WebP' },
  { id: 3, src: '/images/avatars/slappy-the-seal.WebP' },
]
export default function Login() {
  const { user, getAccessTokenSilently } = useAuth0()
  const { data: userData, add } = useUserDataAuth()
  const [formState, setFormState] = useState<FormState>({
    name: '',
    avatarId: null,
  })
  const [currentAvatar, setCurrentAvatar] = useState<
    number | undefined | null
  >()
  const navigate = useNavigate()

  useEffect(() => {
    if (userData) {
      navigate('/')
    }
  }, [userData, navigate])

  const addUserData = async () => {
    const token = await getAccessTokenSilently()

    if (user) {
      add.mutateAsync({
        newUser: {
          name: formState.name,
          authId: user.sub as string,
          avatarId: currentAvatar,
        },
        token,
      })
    }
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }

  const handleSelectAvatar = (avatarId: number) => {
    setCurrentAvatar(avatarId)
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (formState.name == '') {
      alert('Please enter a name')
      return
    }

    await addUserData()
  }

  // If a user signs up/signs in check to see if they have a name if not
  // render user fields Name* and Pick Avatar
  // If user does have a name, navigate to home page
  //
  // Custom button would have an onclick to set a state for currently selected avatar id
  // each image is connected to the button
  // in addUserData the avatarId would come from custom avatarButton state thingy
  // type=button and preventDefault()

  return (
    <Box
      height="100vh"
      flex="1"
      flexDir="column"
      backgroundColor="#B1CFB7"
      display="flex"
      justifyContent="center"
      alignItems="center"
      fontFamily="'Indie Flower', cursive"
      border="1px solid #ccc"
      borderRadius="md"
      boxShadow="md"
      fontWeight="bold"
    >
      <IfNotAuthenticated>
        <Text fontSize="xl">Please Login</Text>
      </IfNotAuthenticated>
      {/* <IfAuthenticated> */}
      <form onSubmit={handleSubmit}>
        <FormLabel htmlFor="name" as="h3" fontSize="2xl" mb={4} mt={4}>
          What shall we call you?
        </FormLabel>
        <Input
          id="name"
          type="text"
          spellCheck="false"
          value={formState.name}
          onChange={handleChange}
        />
        <FormLabel htmlFor="avatarId" as="h3" fontSize="2xl" mb={4} mt={8}>
          Choose your Motivational avatar
        </FormLabel>
        <SimpleGrid columns={3} spacing={6}>
          {avatars.map((avatar) => (
            <Button
              key={avatar.id}
              style={{ width: '250px', height: '250px' }}
              type="button"
              onClick={() => handleSelectAvatar(avatar.id)}
            >
              <Image key={avatar.id} src={avatar.src} />
            </Button>
          ))}
        </SimpleGrid>
        <Button type="submit" marginTop={4}>
          submit
        </Button>
        <Box>
          <Image
            src="/funPhotos/big-blue-fish.webp"
            alt="A large fish"
            boxSize="82px"
            position="absolute"
            top="14%"
            left="74%"
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
          {/* Add other images here */}
        </Box>
      </form>
      {/* </IfAuthenticated> */}
    </Box>
  )
}
