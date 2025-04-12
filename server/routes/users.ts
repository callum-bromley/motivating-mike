import express from 'express'
import { checkJwt } from '../middleware/auth'
import { Request } from 'express-jwt'

import * as db from '../db/functions/users'

const router = express.Router()
// NOTE: For console logging auth middleware
// import { logRequest } from '../middleware/auth'
// router.use(logRequest)

// GET /api/v1/user/
router.get('/', checkJwt, async (req: Request
  , res) => {
  try {
    const authId = req.auth?.sub
    const user = await db.getUserByAuthId(authId as string)
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
