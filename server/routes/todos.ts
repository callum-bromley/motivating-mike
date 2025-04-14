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

// GET /api/v1/todos/:id
router.get('/user/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    const todos = await db.getTodosByUserId(id)
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

router.post('/', async (req, res, next) => {
  try {
    await db.addTodo(req.body)
    console.log('Through route', req.body)
    res.sendStatus(204)
  } catch (e) {
    next(e)
  }
})

//
// PATCH /api/v1/todo/id

router.patch('/:id', async (req, res, next) => {
  try {
    const { task, urgency, created, due, completed, userId } = req.body
    const id = Number(req.params.id)

    await db.updateTodo({
      id,
      task,
      urgency,
      created,
      due,
      completed,
      userId,
    })
    res.sendStatus(204)
  } catch (e) {
    next(e)
  }
})
//
// DELETE /api/v1/todo/id

router.delete('/:id', async (req, res, next) => {
  try {
    const id = Number(req.params.id)
    await db.deleteTodo(id)
    res.sendStatus(204)
  } catch (e) {
    next(e)
  }
})

export default router
