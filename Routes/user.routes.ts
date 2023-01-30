import express, { Router } from "express";
import { CreateUser, GetAllUsers, LoginUsers } from "../Controller/users.controllers";

const router = Router();

router.route("/registerusers").post(CreateUser);
router.route("/getallusers").get(GetAllUsers);
router.route("/userslogin").post(LoginUsers);

export default router