import { Outlet } from 'react-router-dom'
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
      <header>
        <Nav />
      </header>
      <main>
        <Outlet context={{ username, updateUsername }} />
      </main>
      <Footer />
    </>
  )
}
