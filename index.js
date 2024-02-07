import express from "express";
import cors from "cors";
import UserRouter from "./routes/UserRoute.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(UserRouter)

app.listen(3000, () => {
  console.log("server up and runing");
});

