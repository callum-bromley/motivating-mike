import { Box, Flex, Icon, Input, useDisclosure, VStack } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'
import { useAuth0 } from '@auth0/auth0-react'
import {
  Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'

export default function Nav() {
  const navigate = useNavigate()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { user, logout, loginWithRedirect } = useAuth0()

  const handleSignOut = () => {
    logout()
  }

  const handleSignIn = () => {
    loginWithRedirect({
      authorizationParams: {
        redirect_uri: window.location.origin + '/signed-in',
      },
    })
  }


  return (
    <>
      <Box position="absolute" right={6} top={4}>
        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton m={2} />
            <DrawerHeader></DrawerHeader>

            <DrawerBody>
              <Flex direction="column" gap={4}>
                <IfAuthenticated>
                  {user && <p>Username: {user?.name}</p>}
                  <VStack marginRight="auto">
                    <button onClick={() => navigate(`/`)}>Home</button>
                    <button onClick={() => navigate(`/profile`)}>Profile</button>
                    <button onClick={() => navigate(`/todo-list`)}>Todos</button>
                  </VStack>
                </IfAuthenticated>
                <IfNotAuthenticated>
                  <button onClick={() => navigate(`/`)}>Home</button>
                  <button onClick={() => navigate(`/login`)}>Profile</button>
                  <button onClick={() => navigate(`/todo-list`)}>Todos</button>
                </IfNotAuthenticated>
              </Flex>
            </DrawerBody>

            <DrawerFooter>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
        <Flex justify="flex-end" gap={6}>
          <IfAuthenticated>
            <button onClick={handleSignOut}>Sign Out</button>
          </IfAuthenticated>
          <IfNotAuthenticated>
            <button onClick={handleSignIn}>Sign In</button>
          </IfNotAuthenticated>
          <Icon as={HamburgerIcon} boxSize={6} color='red.500' onClick={onOpen} />
        </Flex>
      </Box>
    </>
  )
}
