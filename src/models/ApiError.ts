interface Request {
  status: number;
  message: string;
}

export default class ApiError extends Error {
  public readonly status: number = 400;
  public constructor({ status, message }: Request) {
    super(message);
    this.status = status;
  }
}
