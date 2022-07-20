import express from "express";
import UserController from "../controller/usersController.js";

const router = express.Router();

router
  .get("/user", UserController.listUser)
  .get("/user/:id", UserController.listUserById)
  .post("/user", UserController.addUser)
  .put("/user/:id", UserController.updateUser)
  .delete("/user/:id", UserController.deleteUser)

export default router;   