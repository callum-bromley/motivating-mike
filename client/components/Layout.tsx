import { Outlet } from 'react-router-dom'
import { Box } from '@chakra-ui/react'
import Nav from './Nav'
import Footer from './Footer'

export default function Layout() {

  return (
    <>
      <Box position="absolute" right={4} top={4}>
        <header>
          <Nav />
        </header>
      </Box>
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
