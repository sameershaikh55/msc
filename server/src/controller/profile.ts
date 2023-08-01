import { Request, NextFunction } from "express";
import catchAsyncErrors from "../middleware/catchAsyncErrors";
import RegistrationModel from "../models/registration";
import sendResponse from "../utils/sendResponse";

exports.updateProfile = catchAsyncErrors(
  async (req: Request, res: any, next: NextFunction) => {
    const updated = await RegistrationModel.findByIdAndUpdate(
      res.user._id,
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
    sendResponse(true, 200, "user", res.user, res);
  }
);
