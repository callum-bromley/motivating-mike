import express from 'express'
import * as Path from 'node:path'

import todosRoutes from './routes/todos'
import usersRoutes from './routes/users'
import avatarsRoutes from './routes/avatars'
import hecklesRoutes from './routes/heckles'
import statusRoutes from './routes/todoStatus'

const server = express()
server.use(express.json())

server.use('/api/v1/todos', todosRoutes)
server.use('/api/v1/users', usersRoutes)
server.use('/api/v1/avatars', avatarsRoutes)
server.use('/api/v1/heckles', hecklesRoutes)
server.use('/api/v1/todostatus', statusRoutes)

if (process.env.NODE_ENV === 'production') {
  server.use(express.static(Path.resolve('public')))
  server.use('/assets', express.static(Path.resolve('./dist/assets')))
  server.get('*', (req, res) => {
    res.sendFile(Path.resolve('./dist/index.html'))
  })
}

export default server
