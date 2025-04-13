import { Box, Button, FormLabel, Input } from "@chakra-ui/react";
import { IfAuthenticated, IfNotAuthenticated } from "../components/Authenticated";
import { useAuth0 } from "@auth0/auth0-react";
import useUserDataAuth from "../apis/use-user-data-auth";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Login() {
  const { user, loginWithRedirect, getAccessTokenSilently } = useAuth0()
  const { data: userData, add } = useUserDataAuth()
  const [formState, setFormState] = useState({ name: '', avatarId: '' })
  const navigate = useNavigate()

  const handleSignIn = () => {
    loginWithRedirect()
  }

  useEffect(() => {
    if (userData) {
      navigate('/')
    }
  }, [userData, navigate])

  const addUserData = async () => {
    const token = await getAccessTokenSilently()

    if (user) {
      add.mutateAsync({
        newUser: { name: formState.name, authId: user.sub, avatarId: formState.avatarId },
        token,
      })
    }
  }

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }


  const handleSubmit = async (event) => {
    event.preventDefault()

    if (formState.name == '') {
      alert('Please enter a name')
      return
    }

    await addUserData()
    navigate('/')
  }



  // If a user signs up/signs in check to see if they have a name if not
  // render user fields Name* and Pick Avatar
  // If user does have a name, navigate to home page

  return (
    <Box
      height="100vh"
      flex="1"
      flexDir="column"
      backgroundColor="#B1CFB7"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <IfNotAuthenticated>
        <Button onClick={handleSignIn}>Login</Button>
        <Button onClick={handleSignIn}>Signup</Button>
        <h1>placeholder Login page - user not logged in</h1>
        <p>Sign in to see your data</p>
      </IfNotAuthenticated>
      <IfAuthenticated>
        <form onSubmit={handleSubmit}>
          <FormLabel htmlFor="name">
            What shall we call you?
          </FormLabel>
          <Input id="name" type="text" spellCheck="false" value={formState.name} onChange={handleChange} />
          <Button type="submit">
            submit
          </Button>
        </form>
        <h1>placeholder Login page - user logged in</h1>
      </IfAuthenticated>
    </Box >
  )
}
