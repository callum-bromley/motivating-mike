import { useNavigate } from 'react-router-dom'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'
import { useAuth0 } from '@auth0/auth0-react'

export default function Nav() {
  const navigate = useNavigate()

  const { user, logout, loginWithRedirect } = useAuth0()

  const handleSignOut = () => {
    logout()
  }

  const handleSignIn = () => {
    loginWithRedirect()
  }

  return (
    <>
      <IfAuthenticated>
        <button onClick={() => navigate(`/`)}>Home</button>
        <button onClick={() => navigate(`/profile`)}>Profile</button>
        <button onClick={() => navigate(`/todo-list`)}>Todos</button>
        <button onClick={handleSignOut}>Sign Out</button>
        {user && <p>Signed in as: {user?.name}</p>}
        <img src={user?.picture} alt='user icon' />
      </IfAuthenticated>
      <IfNotAuthenticated>
        <button onClick={() => navigate(`/`)}>Home</button>
        <button onClick={() => navigate(`/login`)}>Profile</button>
        <button onClick={() => navigate(`/todo-list`)}>Todos</button>
        <button onClick={handleSignIn}>Sign In</button>
      </IfNotAuthenticated>
    </>
  )
}
