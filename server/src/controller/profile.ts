import { Request, NextFunction } from "express";
import catchAsyncErrors from "../middleware/catchAsyncErrors";
import RegistrationModel from "../models/registration";
import sendResponse from "../utils/sendResponse";

exports.updateProfile = catchAsyncErrors(
  async (req: Request, res: any, next: NextFunction) => {
    const updated = await RegistrationModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );

    sendResponse(true, 200, "user", updated, res);
  }
);

exports.getUserData = catchAsyncErrors(
  async (req: Request, res: any, next: NextFunction) => {
    const user = res.locals.user;

    const dataToSend = {
      firstName: user.firstName,
      surname: user.surname,
      email: user.email,
      verified: user.verified,
      createdAt: user.createdAt,
    };

    sendResponse(true, 200, "user", { ...dataToSend }, res);
  }
);
