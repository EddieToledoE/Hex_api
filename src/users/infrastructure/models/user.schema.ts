import { Schema, model } from "mongoose";

const UserSchema = new Schema(
  {
    username: {
      type: String,
    },
    uuid: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
    },
  },
  {
    timestamps: false,
    versionKey: false,
  }
);

const UserModel = model("users", UserSchema);

export default UserModel;
