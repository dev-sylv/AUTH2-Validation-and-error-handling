import { deleteAllProducts, EnterProducts, getAllProducts, getProductsByCategory, updateProducts } from "../Controller/products.controller";

import { Router } from "express";

const router = Router();

router.route("/enterproducts").post(EnterProducts);
router.route("/getallproducts").get(getAllProducts);
router.route("/categoryproducts").get(getProductsByCategory);
router.route("/clearallproducts").delete(deleteAllProducts);
router.route("/updateproduct/:productID").patch(updateProducts);

export default router;