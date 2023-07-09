import express from 'express'
import { env } from './config'

const app = express()

app.get('/', (req, res) => {
  res.send('Hello, World!' + env.port)
})

app.listen(env.port, () => {
  console.log(`Server is running on port ${env.port}`)
})
