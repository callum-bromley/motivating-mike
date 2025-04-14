import { Outlet } from 'react-router-dom'
import { Box } from '@chakra-ui/react'
import Nav from './Nav'
import Footer from './Footer'
import { useState } from 'react'

export default function Layout() {
  const [username, setUsername] = useState('Unknown user')

  const updateUsername = (u: string) => {
    setUsername(u)
  }

  return (
    <>
      <Box position="absolute" right={4} top={4}>
        <header>
          <Nav />
        </header>
      </Box>
      <main>
        <Outlet context={{ username, updateUsername }} />
      </main>
      <Footer />
    </>
  )
}
