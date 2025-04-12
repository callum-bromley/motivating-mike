import express from 'express'
import { checkJwt, RequestToken } from '../middleware/auth'

import * as db from '../db/functions/users'

const router = express.Router()

// GET /api/v1/user/
// eslint-disable-next-line @typescript-eslint/no-explicit-any
router.get('/', checkJwt, async (req: RequestToken, res) => {
  try {
    const userId = req.user
    console.log('routes/user: req.user', req.user)
    const user = await db.getUserById(userId)
    console.log('routes/user: req.body', req)

    // if (!user) {
    //   return res.status(404).send('User not found')
    // }
    console.log('routes/user: further down')
    res.json(user)
  } catch (error) {
    console.error(error)
    res.status(500).send('Errors while retrieving user')
  }
})

// GET /api/v1/user/id
router.get('/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    const user = await db.getUserById(id)

    res.json(user)
  } catch (error) {
    console.error(error)
    res.status(500).send('No user loaded')
  }
})

// POST /api/v1/user
//
// PATCH /api/v1/user/id
//
// DELETE /api/v1/user/id

export default router
