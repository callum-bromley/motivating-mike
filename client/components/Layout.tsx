import { Outlet } from 'react-router-dom'
import { Box } from '@chakra-ui/react'
import Nav from './Nav'
import Footer from './Footer'

export default function Layout() {

  return (
    <>
      <header>
        <Nav />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  )
}
