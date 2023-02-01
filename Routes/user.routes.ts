import express, { Router } from "express";
import { CreateUser, deleteAllUsers, GetAllUsers, GetOneUser, LoginUsers } from "../Controller/users.controllers";

const router = Router();

router.route("/registerusers").post(CreateUser);
router.route("/getallusers").get(GetAllUsers);
router.route("/getoneuser/:userID").get(GetOneUser);
router.route("/userslogin").post(LoginUsers);
router.route("/deleteallusers").delete(deleteAllUsers);

export default router