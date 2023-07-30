import { Response } from "express";

// SEND RESPONSE
const sendResponse = (
  status: boolean,
  statusCode: number,
  keyname: string,
  data: any, // Replace 'any' with a more specific type if possible
  res: Response
): void => {
  res.status(statusCode).json({
    success: status,
    [keyname]: data,
  });
};

export default sendResponse;
