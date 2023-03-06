import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
  {
    username: {
      type: "string",
      required: true,
      minLength: 6,
      maxLength: 30,
      unique: true,
    },
    email: {
      type: "string",
      required: true,
      minLength: 6,
      maxLength: 50,
      unique: true,
    },
    password: {
      type: "string",
      required: true,
      minLength: 6,
    },
    admin: {
      type: "boolean",
      default: false,
    },
  },
  {timestamps: true}
);

export const UserModel = mongoose.model("User", userSchema);
