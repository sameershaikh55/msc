import mongoose, { Schema, Document, Model, Types } from "mongoose";
const { ObjectId } = mongoose.Types;

export interface Games extends Document {
  cosmic: {
    correct: number;
    wrong: number;
  };
  planet: {
    correct: number;
    wrong: number;
  };
  user: typeof ObjectId;
  createdAt: Date;
}

const gamesSchema: Schema<Games> = new Schema<Games>({
  cosmic: {
    correct: {
      type: Number,
      default: 0,
    },
    wrong: {
      type: Number,
      default: 0,
    },
  },
  planet: {
    correct: {
      type: Number,
      default: 0,
    },
    wrong: {
      type: Number,
      default: 0,
    },
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

const GamesModel: Model<Games> = mongoose.model<Games>("games", gamesSchema);

export default GamesModel;
