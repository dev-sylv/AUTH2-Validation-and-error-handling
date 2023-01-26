import express, { Router } from "express";
import { AllProducts, createNewProducts, deleteProducts, OneProduct } from "../Controller/products.controller";

const router = Router();

router.route("/addproducts").post(createNewProducts);
router.route("/getallproducts").get(AllProducts);
router.route("/getproduct/:productID").get(OneProduct);
router.route("/deleteproduct/:productID").delete(deleteProducts);

export default router