import { useNavigate } from 'react-router-dom'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'
import { useAuth0 } from '@auth0/auth0-react'

export default function Nav() {
  const navigate = useNavigate()

  const { user, logout, loginWithRedirect } = useAuth0()
  console.log(user)

  const handleSignOut = () => {
    logout()
  }

  const handleSignIn = () => {
    loginWithRedirect()
  }

  return (
    <>
      <button onClick={() => navigate(`/`)}>Home</button>
      <button onClick={() => navigate(`/profile`)}>Profile</button>
      <button onClick={() => navigate(`/todo-list`)}>Todos</button>
      <IfAuthenticated>
        <button onClick={handleSignOut}>Sign Out</button>
        {user && <p>Signed in as: {user?.name}</p>}
        <img src={user?.picture} alt='user icon' />
      </IfAuthenticated>
      <IfNotAuthenticated>
        <button onClick={handleSignIn}>Sign In</button>
      </IfNotAuthenticated>
    </>
  )
}
