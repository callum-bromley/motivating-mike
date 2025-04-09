import express from 'express'
import * as Path from 'node:path'

import todosRoutes from './routes/todos'
import usersRoutes from './routes/users'
import avatarsRoutes from './routes/avatars'

import todoRoutes from './routes/todos'

const server = express()
server.use(express.json())

server.use('/api/v1/todos', todosRoutes)
server.use('/api/v1/users', usersRoutes)
server.use('/api/v1/avatars', avatarsRoutes)
// ADD YOUR API ROUTES HERE
server.use('/api/v1/todos', todoRoutes)

if (process.env.NODE_ENV === 'production') {
  server.use(express.static(Path.resolve('public')))
  server.use('/assets', express.static(Path.resolve('./dist/assets')))
  server.get('*', (req, res) => {
    res.sendFile(Path.resolve('./dist/index.html'))
  })
}

export default server
