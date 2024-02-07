import express from "express";
import { createUser, deleteUser, getUserById, getUsers, updateUser } from "../controller/UserController.js";

const UserRouter = express.Router();

UserRouter.get("/users", getUsers);
UserRouter.get("/users/:id", getUserById);
UserRouter.post("/users", createUser);
UserRouter.patch("/users/:id", updateUser);
UserRouter.delete("/users/:id", deleteUser);

export default UserRouter;
