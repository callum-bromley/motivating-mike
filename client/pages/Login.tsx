import { Box, Button } from "@chakra-ui/react";
import { IfAuthenticated, IfNotAuthenticated } from "../components/Authenticated";
import { useAuth0 } from "@auth0/auth0-react";
import useUserDataAuth from "../apis/use-user-data-auth";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Login() {
  const { user, loginWithRedirect } = useAuth0()
  const { data: userData } = useUserDataAuth()
  const navigate = useNavigate()

  const handleSignIn = () => {
    loginWithRedirect()
  }

  useEffect(() => {
    if (userData) {
      navigate('/')
    }
  }, [userData, navigate])


  // if (user) {
  //   add.mutateAsync({
  //     newUser: { name, authId: user.sub },
  //     token,
  //   })
  // }

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
        <h1>placeholder Login page - user logged in</h1>
      </IfAuthenticated>
    </Box >
  )
}
