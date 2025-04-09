import express from 'express'

import * as db from '../db/functions/avatars'

const router = express.Router()

//GET /api/v1/avatars
//
//GET /api/v1/avatars/id
router.get('/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    const avatar = await db.getAvatarById(id)

    res.json(avatar)
  } catch (error) {
    console.error(error)
    res.status(500).send('No avatar loaded')
  }
})

//PATCH /api/v1/avatars/id

export default router
