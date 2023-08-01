import { Request, Response, NextFunction } from "express";
import ErrorHandler from "../utils/errorhandler";
import jwt, { Secret } from "jsonwebtoken";
import RegistrationModel from "../models/registration";
import catchAsyncErrors from "./catchAsyncErrors";

const JWT_SECRET: Secret =
  process.env.JWT_SECRET || "jkdbidhwhdiahdiahwdihwmdawhidhadhawiodhwajdowd";

export const authentication = catchAsyncErrors(
  async (req: Request, res: Response, next: NextFunction) => {
    const token = req.cookies.token;

    if (!token)
      return next(
        new ErrorHandler("Please Login to access this resource", 403)
      );

    try {
      const decoded: any = jwt.verify(token, JWT_SECRET);

      res.locals.user = await RegistrationModel.findById(decoded.id);
      next();
    } catch (err) {
      return next(new ErrorHandler("Invalid or expired token", 401));
    }
  }
);
