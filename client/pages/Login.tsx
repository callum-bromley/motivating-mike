import { Box } from "@chakra-ui/react";
import { IfAuthenticated, IfNotAuthenticated } from "../components/Authenticated";

export default function Login() {




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
        <h1>placeholder Login page - user not logged in</h1>
      </IfNotAuthenticated>
      <IfAuthenticated>
        <h1>placeholder Login page - user logged in</h1>
      </IfAuthenticated>
    </Box>
  )
}
