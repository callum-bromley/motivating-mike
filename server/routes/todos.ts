import express from 'express'
import * as db from '../db/functions/todos'

const router = express.Router()

// GET /api/v1/todos
router.get('/', async (req, res) => {
  try {
    const todos = await db.getTodos()
    // console.log('Through route', todos)
    res.json(todos)
  } catch (error) {
    console.error(error)
    res.status(500).send('No todos loaded')
  }
})

// GET /api/v1/todos/id
router.get('/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    console.log('server route: ', id)
    const todos = await db.getTodosByUserId(id)
    console.log('route db data returned', todos)
    res.json(todos)
  } catch (err) {
    console.error(err)
    res.sendStatus(500)
  }
})

// GET /api/v1/todos/urgency
//
// GET /api/v1/todos/status
//
// POST /api/v1/todo
//
// PATCH /api/v1/todo/id
//
// DELETE /api/v1/todo/id

export default router
