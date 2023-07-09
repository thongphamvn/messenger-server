type Env = {
  port: number
}

export const env: Env = {
  port: process.env.PORT ? Number(process.env.PORT) : 3000,
}
