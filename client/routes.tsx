import { createRoutesFromElements, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Profile from './pages/Profile'
import TodoList from './pages/TodoList'
import { Box } from '@chakra-ui/react'
//  <Box height="100vh" width="100vw"></Box>

export default createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="/profile" element={<Profile />} />
    <Route path="/todo-list" element={<TodoList />} />
  </Route>,
)
