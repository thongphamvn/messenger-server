import express from 'express'
import { NotFoundError } from '../utils'

const router = express.Router({})

router.use((req, res, next) => {
  console.log('user middleware')
  next()
})

router.get('', (req, res, next) => {
  throw new NotFoundError('asd')
  res.send('hi users')
})

export default router
