import { NextFunction, Request, Response } from "express";
import ApiError from "../models/ApiError";

const error = (
  err: ApiError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof Object) {
    if (!err.status)
      return res.status(500).json({ status: "error", message: err.message });
    return res.status(err.status).json({ error: err.message });
  }

  return res
    .status(500)
    .json({ status: "error", message: "Internal Server Error" });
};

export default error;
