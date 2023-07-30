class ErrorHandler extends Error {
  statusCode: number;

  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;

    // Ensure stack trace is captured for better debugging
    Error.captureStackTrace(this, this.constructor);
  }
}

export default ErrorHandler;
