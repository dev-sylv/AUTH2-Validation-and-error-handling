import { deleteAllProducts, EnterProducts, getAllProducts, getProductsByCategory } from "../Controller/products.controller";

import { Router } from "express";

const router = Router();

router.route("/enterproducts").post(EnterProducts);
router.route("/getallproducts").get(getAllProducts);
router.route("/categoryproducts").get(getProductsByCategory);
router.route("/clearallproducts").delete(deleteAllProducts);

export default router;