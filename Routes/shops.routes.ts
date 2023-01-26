import express, { Router } from "express";
import { AllShops, createNewShops, deleteShops, OneShop } from "../Controller/shops.controller";

const router = Router();

router.route("/getallshops").get(AllShops);
router.route("/createnewshop").post(createNewShops);
router.route("/getoneshop").get(OneShop);
router.route("/deleteshop").post(deleteShops);

export default router;