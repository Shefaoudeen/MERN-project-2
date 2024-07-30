import express from "express";
import { User } from "../models/user.model.js";

export const userRouter = express.Router();

userRouter.route("/").get((req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err));
});

userRouter.route("/add").post((req, res) => {
  const userName = req.body.userName;
  const newUser = new User({ userName });
  newUser
    .save()
    .then(() => res.json("User added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});
