import { useNavigate } from 'react-router-dom'

export default function Nav() {
  const navigate = useNavigate()

  return (
    <>
      <button onClick={() => navigate(`/`)}>Home</button>
      <button onClick={() => navigate(`/profile`)}>Profile</button>
      <button onClick={() => navigate(`/todo-list`)}>Todos</button>
    </>
  )
}
