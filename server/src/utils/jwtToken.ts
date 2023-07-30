import { Response } from "express";
import { IUser } from "../models/registration";

const sendToken = (user: IUser, statusCode: number, res: Response): void => {
  const token: string = user.getJWTToken();

  // options for cookie
  const options = {
    expires: new Date(
      Date.now() + Number(process.env.COOKIE_EXPIRE) * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };

  res.status(statusCode).cookie("token", token, options).json({
    success: true,
    user,
    token,
  });
};

export default sendToken;
