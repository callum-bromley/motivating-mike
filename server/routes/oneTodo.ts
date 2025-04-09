import express from 'express'

import * as db from '../db/functions/todos'

const router = express.Router()

// READ
router.get('/userId', async (req, res) => {
  try {
    const userId = 1
    const todos = await db.getTodosByUserId(userId)
    res.json(todos)
  } catch (err) {
    console.error(err)
    res.sendStatus(500)
  }
})

export default router
