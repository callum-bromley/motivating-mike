import express from 'express'
import * as db from '../db/functions/todoStatus'

const router = express.Router()

// GET /api/v1/todostatus/complete
//
// PATCH /api/v1/todostatus/id

router.patch('/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    // console.log('server route: ', id)
    const todos = await db.updateStatusById(id)
    // console.log('route db data returned', todos)
    res.json(todos)
  } catch (err) {
    console.error(err)
    res.sendStatus(500)
  }
})

// PATCH /api/v1/todostatus/id/urgency

export default router
