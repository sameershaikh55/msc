import { Request, NextFunction } from "express";
import catchAsyncErrors from "../middleware/catchAsyncErrors";
import GamesModel from "../models/games";
import sendResponse from "../utils/sendResponse";

exports.updateGame = catchAsyncErrors(
  async (req: Request, res: any, next: NextFunction) => {
    const userId = res.locals.user._id;
    const { name, type } = req.body;

    let updateFields: any = {};
    if (name === "cosmic" && (type === "correct" || type === "wrong")) {
      updateFields[`cosmic.${type}`] = 1; // Increment cosmic.correct or cosmic.wrong
    } else if (name === "planet" && (type === "correct" || type === "wrong")) {
      updateFields[`planet.${type}`] = 1; // Increment planet.correct or planet.wrong
    } else {
      return sendResponse(false, 400, "error", "Invalid name or type", res);
    }

    const updated = await GamesModel.findOneAndUpdate(
      { user: userId },
      { $inc: updateFields },
      { new: true }
    );

    sendResponse(true, 200, "game", updated, res);
  }
);

exports.getGameData = catchAsyncErrors(
  async (req: Request, res: any, next: NextFunction) => {
    const updated = await GamesModel.findOne({ user: res.locals.user._id });

    sendResponse(true, 200, "game", updated, res);
  }
);
