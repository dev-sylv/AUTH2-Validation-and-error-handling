import express, { Router } from "express";
import { CreateUser, deleteAllUsers, GetAllUsers, GetOneUser, LoginUsers } from "../Controller/users.controllers";

import { loginValidation, registerValidation } from "../Validation/Auth/userValidation";

const router = Router();

// Parsing validation middlewares:
router.route("/registerusers").post(registerValidation, CreateUser);
router.route("/userslogin").post(loginValidation, LoginUsers);
router.route("/getallusers").get(GetAllUsers);
router.route("/getoneuser/:userID").get(GetOneUser);
router.route("/deleteallusers").delete(deleteAllUsers);

export default router