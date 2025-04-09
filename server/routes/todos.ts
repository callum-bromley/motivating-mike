import express from 'express'
import * as db from '../db/functions/todos'

const router = express.Router()


// GET /api/v1/todos
router.get('/', async (req, res) => {
  try {
    const todos = await db.getTodos()
    res.json(todos)
  } catch (err) {
    console.error(err)
    res.sendStatus(500)
  }
})

// GET /api/v1/todos/userId
router.get('/:userId', async (req, res) => {
  try {
    const userId = 1
    console.log(userId)
    const todos = await db.getTodosByUserId(userId)
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
