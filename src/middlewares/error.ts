import { NextFunction, Request, Response } from 'express'
import { BaseError, HttpStatusCode } from '../utils'

export function errorHandler(
  err: BaseError,
  req: Request,
  res: Response,
  next: NextFunction
) {
  const status = err.statusCode || HttpStatusCode.INTERNAL_SERVER
  const message = err.message || 'Something went wrong'
  res.status(status).send(message)
}
