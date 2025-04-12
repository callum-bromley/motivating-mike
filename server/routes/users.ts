import express from 'express'
import { checkJwt, logRequest } from '../middleware/auth'
import { Request } from 'express-jwt'

import * as db from '../db/functions/users'

const router = express.Router()
router.use(logRequest)
// GET /api/v1/user/
// eslint-disable-next-line @typescript-eslint/no-explicit-any
router.get('/', checkJwt, async (req: Request
  , res) => {
  try {
    // const userId = 1
    const authId = req.auth?.sub
    console.log(authId)
    const user = await db.getUserByAuthId(authId)

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
