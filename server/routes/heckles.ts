import express from 'express'

import * as db from '../db/functions/heckles'

const router = express.Router()

// GET /api/v1/heckles
router.get('/', async (req, res) => {
  try {
    const heckles = await db.getHeckles()

    res.json(heckles)
  } catch (error) {
    console.error(error)
    res.status(500).send('No heckles loaded')
  }
})
// GET /api/v1/heckles/severity
//
// GET /api/v1/heckles/id
//
// GET /api/v1/heckles/avatar/id

export default router// GET /api/v1/heckles/severity
