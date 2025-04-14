import express from 'express'
import { checkJwt } from '../middleware/auth'
import { Request } from 'express-jwt'

import { updateUserAvatar } from '../db/functions/users'
import * as db from '../db/functions/users'

const router = express.Router()
// NOTE: For console logging auth middleware
// import { logRequest } from '../middleware/auth'
// router.use(logRequest)

// GET /api/v1/user/
router.get('/', checkJwt, async (req: Request, res) => {
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
router.post('/', async (req, res, next) => {
  try {
    const result = await db.addNewUser(req.body)
    res.json(result)
  } catch (e) {
    next(e)
  }
})

// PATCH /api/v1/user/id
//
router.patch('/:id', async (req, res) => {
  const userId = Number(req.params.id)
  const { avatar_id } = req.body

  try {
    await updateUserAvatar(userId, avatar_id)
    res.sendStatus(200)
  } catch (err) {
    console.error(err)
    res.status(500).send({ message: 'Failed to update avatar' })
  }
})
// DELETE /api/v1/user/id

export default router
