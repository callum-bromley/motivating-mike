import express from 'express'
import * as todo from '../db/functions/todos.ts'
const router = express.Router()

// GET /api/v1/todos
//
// GET /api/v1/todos/id
//
// GET /api/v1/todos/urgency
//
// GET /api/v1/todos/status
//
// POST /api/v1/todo

router.post('/', async (req, res, next) => {
  try {
    await todo.addTodo(req.body)
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

    await todo.updateTodo({
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
    await todo.deleteTodo(id)
    res.sendStatus(204)
  } catch (e) {
    next(e)
  }
})
