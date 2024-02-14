import { Schema, model } from "mongoose";

const OwnerSchema = new Schema(
  {
    name: {
      type: String,
    },
    phone: {
      type: Number,
      unique: true,
    },
    uuid: {
      type: String,
      unique: true,
    },
    pet: {
      type: String,
    },
  },
  {
    timestamps: false,
    versionKey: false,
  }
);

const OwnerModel = model("owners", OwnerSchema);

export default OwnerModel;
