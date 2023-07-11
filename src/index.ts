import bodyParser from 'body-parser'
import cors from 'cors'
import express from 'express'
import 'express-async-errors'
import { appConfig } from './config'
import userRouter from './controllers/users'
import { errorHandler } from './middlewares'
import { connectMongo } from './utils'

const app = express()

// middlewares
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

// routes
app.get('/', (req, res) => {
  res.send('Hello, World!' + appConfig.port)
})

app.use('/users', userRouter)

app.get('*', function (req, res) {
  res.status(404).send('Invalid route')
})

// error middleware
app.use(errorHandler)

connectMongo()
app.listen(appConfig.port, () => {
  console.log(`Server is running on port ${appConfig.port}`)
})
