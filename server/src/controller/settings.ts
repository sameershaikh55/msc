import { Request, NextFunction } from "express";
import catchAsyncErrors from "../middleware/catchAsyncErrors";
import SettingsModel from "../models/settings";
import sendResponse from "../utils/sendResponse";

exports.updateSettings = catchAsyncErrors(
  async (req: Request, res: any, next: NextFunction) => {
    const userId = res.locals.user._id;

    const updated = await SettingsModel.findOneAndUpdate(
      { user: userId },
      { ...req.body },
      { new: true }
    );

    sendResponse(true, 200, "settings", updated, res);
  }
);

exports.getSettingsData = catchAsyncErrors(
  async (req: Request, res: any, next: NextFunction) => {
    const updated = await SettingsModel.findOne({ user: res.locals.user._id });

    sendResponse(true, 200, "settings", updated, res);
  }
);
