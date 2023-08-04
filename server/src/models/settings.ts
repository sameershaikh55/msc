import mongoose, { Schema, Document, Model, Types } from "mongoose";
const { ObjectId } = mongoose.Types;

export interface Settings extends Document {
  background: string;
  font: string;
  user: typeof ObjectId;
  createdAt: Date;
}

const settingsSchema: Schema<Settings> = new Schema<Settings>({
  background: {
    type: String,
    default: "#2f2b3a",
  },
  font: {
    type: String,
    default: "40px",
  },
  user: {
    type: ObjectId,
    ref: "users",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const SettingsModel: Model<Settings> = mongoose.model<Settings>(
  "settings",
  settingsSchema
);

export default SettingsModel;
