import mongoose, { Schema, Document, Model } from "mongoose";
import bcrypt from "bcryptjs";
import validator from "validator";
import crypto from "crypto";
import jwt from "jsonwebtoken";

export interface IUser extends Document {
  name: string;
  country: string;
  province: string;
  city: string;
  email: string;
  phone: number;
  password: string;
  resetPasswordToken?: {
    token?: string;
    expire?: Date;
  };
  devices: {
    registered: mongoose.Types.ObjectId[];
    stolen: mongoose.Types.ObjectId[];
  };
  createdAt: Date;
  getJWTToken(): string;
  getResetPasswordToken(): string;
}

const usersSchema: Schema<IUser> = new Schema<IUser>({
  name: {
    type: String,
    trim: true,
    required: [true, "Please Enter Your Name"],
    maxLength: [30, "Name cannot exceed 30 characters"],
    minLength: [3, "Name should have more than 4 characters"],
  },
  country: {
    type: String,
    trim: true,
    required: [true, "Please Enter Your Country"],
    maxLength: [30, "Country cannot exceed 30 characters"],
    minLength: [2, "Country should have more than 2 characters"],
  },
  province: {
    type: String,
    trim: true,
    required: [true, "Please Enter Your Province"],
    maxLength: [30, "Province cannot exceed 30 characters"],
    minLength: [2, "Province should have more than 2 characters"],
  },
  city: {
    type: String,
    trim: true,
    required: [true, "Please Enter Your City"],
    maxLength: [30, "City cannot exceed 30 characters"],
    minLength: [2, "City should have more than 2 characters"],
  },
  email: {
    type: String,
    required: [true, "Please Enter Your Email"],
    trim: true,
    unique: true,
    validate: [validator.isEmail, "Please Enter a valid Email"],
  },
  phone: {
    type: Number,
    required: true,
    trim: true,
    minLength: 11,
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minLength: [8, "Password should be greater than 8 characters"],
    // select: false,
  },
  resetPasswordToken: {
    token: String,
    expire: Date,
    // select: false,
  },
  devices: {
    registered: [
      {
        type: mongoose.Types.ObjectId,
        ref: "registerDevices",
      },
    ],
    stolen: [
      {
        type: mongoose.Types.ObjectId,
        ref: "stolenDevice",
      },
    ],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

usersSchema.pre<IUser>("save", async function (next) {
  const user = this;
  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 12);
  }
  next();
});

// JWT TOKEN
usersSchema.methods.getJWTToken = function (this: IUser): string {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET || "", {
    expiresIn: process.env.JWT_EXPIRE || "1d",
  });
};

usersSchema.methods.getResetPasswordToken = function (this: IUser): string {
  // If resetPasswordToken is not already present, initialize it.
  if (!this.resetPasswordToken) {
    this.resetPasswordToken = {};
  }

  // Generating Token
  const resetToken = crypto.randomBytes(20).toString("hex");

  // Hashing and adding resetPasswordToken to userSchema
  this.resetPasswordToken.token = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  this.resetPasswordToken.expire = new Date(Date.now() + 15 * 60 * 1000);

  return resetToken;
};

const RegistrationModel: Model<IUser> = mongoose.model<IUser>(
  "users",
  usersSchema
);

export default RegistrationModel;
