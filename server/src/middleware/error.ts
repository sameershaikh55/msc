import { Request, Response, NextFunction } from "express";
import { MongoError } from "mongodb";

interface CustomMongoError extends MongoError {
  path?: string;
  code?: number;
  statusCode: number;
  keyValue?: string;
}

interface ErrorHandler {
  statusCode: number;
  message: string;
  name?: string;
  code?: number;
  keyValue?: string;
}

const errorHandlerMiddleware = (
  err: ErrorHandler | CustomMongoError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const isCustomMongoError = (
    error: ErrorHandler | CustomMongoError
  ): error is CustomMongoError => {
    return (error as CustomMongoError).code !== undefined;
  };

  if (isCustomMongoError(err)) {
    // Mongoose-specific error handling
    if (err.name === "CastError") {
      const message = `Resource not found. Invalid: ${err.path}`;
      err = { message, statusCode: 400 } as ErrorHandler;
    }

    if (err.code === 11000) {
      const keys = Object.keys(err.keyValue || {}).join(", ");
      const message = `Duplicate ${keys} Entered`;
      err = { message, statusCode: 400 } as ErrorHandler;
    }
  } else {
    // Generic error handling
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal Server Error";

    if (err.name === "JsonWebTokenError") {
      const message = `Json Web Token is invalid, Try again `;
      err = { message, statusCode: 400 } as ErrorHandler;
    }

    if (err.name === "TokenExpiredError") {
      const message = `Json Web Token is Expired, Try again `;
      err = { message, statusCode: 400 } as ErrorHandler;
    }
  }

  res.status(err.statusCode || 500).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
};

export default errorHandlerMiddleware;
