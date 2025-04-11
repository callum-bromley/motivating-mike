import { Outlet } from 'react-router-dom'
import Nav from './Nav'
import Footer from './Footer'
import { Box } from '@chakra-ui/react'

export default function Layout() {
  return (
    <>
      <Box position="fixed">
        <header>
          <Nav />
        </header>
      </Box>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}
