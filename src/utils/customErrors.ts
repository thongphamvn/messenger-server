export enum HttpStatusCode {
  OK = 200,
  BAD_REQUEST = 400,
  NOT_FOUND = 404,
  INTERNAL_SERVER = 500,
}

export class BaseError extends Error {
  public readonly statusCode: HttpStatusCode

  constructor(httpCode: HttpStatusCode, message: string) {
    super(message)
    this.statusCode = httpCode
  }
}

export class NotFoundError extends BaseError {
  constructor(message = 'Not found Error') {
    super(HttpStatusCode.NOT_FOUND, message)
  }
}

export class BadRequestError extends BaseError {
  constructor(message = 'Bad Request Error') {
    super(HttpStatusCode.BAD_REQUEST, message)
  }
}
