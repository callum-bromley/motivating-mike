import express from 'express'
import { checkJwt } from '../middleware/auth'
import { Request } from 'express-jwt'

import * as db from '../db/functions/users'

const router = express.Router()

// GET /api/v1/user/
// eslint-disable-next-line @typescript-eslint/no-explicit-any
router.get('/', checkJwt, async (req: Request
  , res) => {
  try {
    // const userId = 1
    const userId = req.auth?.sub
    console.log('routes/user: req.auth', req.auth?.sub)
    const user = await db.getUserByAuthId(userId)

    // if (!user) {
    //   return res.status(404).send('User not found')
    // }
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
