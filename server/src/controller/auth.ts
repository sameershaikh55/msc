import bcrypt from "bcryptjs";
import crypto from "crypto";
import { Request, Response, NextFunction } from "express";
import ErrorHandler from "../utils/errorhandler";
import catchAsyncErrors from "../middleware/catchAsyncErrors";
import RegistrationModel, { IUser } from "../models/registration";
import sendToken from "../utils/jwtToken";
import sendResponse from "../utils/sendResponse";
import sendEmail from "../utils/sendEmail";

export const register = catchAsyncErrors(
  async (req: Request, res: Response, next: NextFunction) => {
    const userData = await RegistrationModel.create(req.body);
    sendToken(userData as IUser, 201, res);
  }
);

export const login = catchAsyncErrors(
  async (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body;

    if (!email || !password)
      return next(new ErrorHandler("Invalid field", 422));

    const gettingRecord: IUser = await RegistrationModel.findOne({
      email,
    }).select("+password");

    if (!gettingRecord || !gettingRecord.verified)
      return next(new ErrorHandler("user not found", 404));

    const validPassword: boolean = await bcrypt.compare(
      password,
      gettingRecord.password
    );

    if (!validPassword)
      return next(new ErrorHandler("Invalid email and password", 400));

    sendToken(gettingRecord as IUser, 200, res);
  }
);

export const logout = catchAsyncErrors(
  async (req: Request, res: Response, next: NextFunction) => {
    res.cookie("token", null, {
      expires: new Date(Date.now()),
      httpOnly: true,
    });

    sendResponse(true, 200, "message", "logged out successfully", res);
  }
);

// Forget Password
export const forgotPassword = catchAsyncErrors(
  async (req: Request, res: Response, next: NextFunction) => {
    const { email } = req.body;

    const user = await RegistrationModel.findOne({ email }).select(
      "+resetPasswordToken"
    );

    if (!user) {
      return next(new ErrorHandler("user not found", 404));
    }

    if (!user.resetPasswordToken) {
      user.resetPasswordToken = {};
    }

    // Get ResetPassword Token
    const resetToken: string = user.getResetPasswordToken();

    await user.save({ validateBeforeSave: false });

    const resetPasswordUrl = `${process.env.PASSWORD_RESET_URL}/password/reset/${resetToken}`;

    const message = `Your password reset URL is :- \n\n ${resetPasswordUrl} \n\nIf you have not requested this email then, please ignore it.`;

    try {
      await sendEmail({
        email: user.email,
        subject: `Password Recovery`,
        message,
      });

      sendResponse(
        true,
        200,
        "message",
        `Email sent to ${user.email} successfully`,
        res
      );
    } catch (error) {
      const err = error as Error;

      user.resetPasswordToken.token = undefined;
      user.resetPasswordToken.expire = undefined;

      await user.save({ validateBeforeSave: false });

      return next(new ErrorHandler(err.message, 500));
    }
  }
);

// Reset Password
export const resetPassword = catchAsyncErrors(
  async (req: Request, res: Response, next: NextFunction) => {
    const { password, confirmPassword } = req.body;

    if (!password) {
      return next(new ErrorHandler("Invalid field", 422));
    }

    // creating token hash
    const resetPasswordToken: string = crypto
      .createHash("sha256")
      .update(req.params.token)
      .digest("hex");

    const user = await RegistrationModel.findOne({
      "resetPasswordToken.token": resetPasswordToken,
      "resetPasswordToken.expire": { $gt: Date.now() },
    });

    if (!user) {
      return next(
        new ErrorHandler(
          "Reset Password URL is invalid or has been expired",
          400
        )
      );
    }

    if (password !== confirmPassword) {
      return next(new ErrorHandler("Password does not match", 400));
    }

    user.password = password;

    if (user.resetPasswordToken) {
      user.resetPasswordToken.token = undefined;
      user.resetPasswordToken.expire = undefined;
    }

    await user.save();

    sendResponse(true, 200, "message", "Password Reset Successfully!", res);
  }
);
