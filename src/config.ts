import dotenv from 'dotenv'

type ConfigEnv = {
  port: number
  mongoUri: string
}

dotenv.config()

export const appConfig: ConfigEnv = {
  port: process.env.PORT ? Number(process.env.PORT) : 3000,
  mongoUri: process.env.MONGO_URI || '',
}
