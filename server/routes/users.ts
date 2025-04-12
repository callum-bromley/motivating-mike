import express from 'express'
import { checkJwt } from '../middleware/auth'
import jwt from 'jsonwebtoken'

import * as db from '../db/functions/users'

const router = express.Router()

// GET /api/v1/user/
router.get('/', checkJwt, async (req, res) => {
  try {
    console.log(req.body)
    const userId = req.user.user_id
    const user = await db.getUserById(userId)

    if (!user) {
      return res.status(404).set('User not found')
    }

    res.json(user)
  } catch (error) {
    console.error(error)
    res.status(500).send('Erros while retrieving user')
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
