import { Schema, model } from "mongoose";

const PetSchema = new Schema(
  {
    name: {
      type: String,
    },
    breed: {
      type: String,
    },
    age: {
      type: Number,
    },
    vaccinated: {
      type: Boolean,
    },
  },
  {
    timestamps: false,
    versionKey: false,
  }
);

const PetModel = model("pets", PetSchema);

export default PetModel;
