import mongoose from 'mongoose'
import { appConfig } from '../config'

export const connectMongo = async () => {
  const uri = appConfig.mongoUri
  if (!uri) {
    throw new Error(`Missing MONGO_URI`)
  }

  return mongoose
    .connect(uri, { connectTimeoutMS: 5000 })
    .then(() => {
      console.log('Connected to MongoDB')
    })
    .catch((error) => {
      console.error('Failed to connect to MongoDB:', error)
      process.exit(1)
    })
}
