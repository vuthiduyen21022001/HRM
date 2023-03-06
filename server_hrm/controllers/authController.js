import {UserModel} from "../models/userModel.js";

//Register
export const userRegister = async (req, res) => {
  try {
    const newUser = await new UserModel({
      username: req.body.username,
      password: req.body.password,
      email: req.body.email,
    });
    const user = await newUser.save();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
};
export const getUser = async (req, res) => {
  try {
    const users = await UserModel.find();
    console.log("user", users);
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json(error);
  }
};
