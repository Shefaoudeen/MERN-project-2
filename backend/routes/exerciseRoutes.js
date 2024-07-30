import express from "express";
import { Exercise } from "../models/exercise.model.js";

export const exerciseRouter = express.Router();

exerciseRouter.route("/").get((req, res) => {
  Exercise.find()
    .then((exes) => res.json(exes))
    .catch((err) => res.status(400).json("Error: " + err));
});

exerciseRouter.route("/add").post((req, res) => {
  const userName = req.body.userName;
  const description = req.body.description;
  const duration = Number(req.body.duration);
  const date = Date.parse(req.body.date);

  const newExercise = new Exercise({
    userName,
    description,
    duration,
    date,
  });

  newExercise
    .save()
    .then(() => res.json("Exercise added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

exerciseRouter.route("/:id").get((req, res) => {
  Exercise.findById(req.params.id)
    .then((exe) => res.json(exe))
    .catch((err) => res.status(400).json("Error :" + err));
});

exerciseRouter.route("/update/:id").post((req, res) => {
  Exercise.findById(req.params.id)
    .then((exe) => {
      exe.userName = req.body.userName;
      exe.description = req.body.description;
      exe.duration = Number(req.body.duration);
      exe.date = Date.parse(req.body.date);

      exe
        .save()
        .then(() => res.json("Successfully updated"))
        .catch((err) => res.status(400).json("Err : " + err));
    })
    .catch((err) => res.status(400).json("Err : " + err));
});

exerciseRouter.route("/:id").delete((req, res) => {
  Exercise.findByIdAndDelete(req.params.id)
    .then(() => res.json("Successfully deleted"))
    .catch((err) => res.status(400).json("Err : " + err));
});
