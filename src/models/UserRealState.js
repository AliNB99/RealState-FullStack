import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  createAt: {
    type: Date,
    default: () => Date.now(),
    immutable: true,
  },
  role: {
    type: String,
    default: "USER",
  },
});

const UserRealState =
  models.UserRealState || model("UserRealState", userSchema);

export default UserRealState;
