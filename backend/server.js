import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { ATLAS_URI } from "./config.js";
import { userRouter } from "./routes/userRoutes.js";
import { exerciseRouter } from "./routes/exerciseRoutes.js";

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const uri = ATLAS_URI;
mongoose.connect(uri);
const connection = mongoose.connection;
connection.once("open", () => {
  console.log(`MongoDB database connection established successfully`);
});

app.use("/user", userRouter);
app.use("/exercise", exerciseRouter);

app.listen(port, () => {
  console.log(`Server is listening at port ${port}`);
});
