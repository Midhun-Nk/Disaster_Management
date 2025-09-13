import express, { json } from "express";
import cors from "cors";
import connectDb from "./config/connectDb.js";
import dotenv from "dotenv";
import userRouter from "./router/userRouter.js";
const server = express();
dotenv.config();
const PORT = 4000;
connectDb();
server.use(cors());
server.use(express.json());

server.use("/api/user", userRouter);

server.use((req, res) => {
  res.send("Api is Working");
});
server.listen(PORT, () => {
  console.log("Server is Running");
});
