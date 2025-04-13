import { createRoutesFromElements, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Profile from './pages/Profile'
import TodoList from './pages/TodoList'
import Login from './pages/Login'
import UserProfilePage from './components/UserProfilePage'

export default createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="/profile" element={<Profile />} />
    <Route path="/profile/:id" element={<UserProfilePage />} />
    <Route path="/todo-list" element={<TodoList />} />
    <Route path="/login" element={<Login />} />
  </Route>,
)
