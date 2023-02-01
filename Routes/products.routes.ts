import { deleteAllProducts, EnterProducts, getAllProducts, getProductsByCategory, pushToWishlist, updateProducts } from "../Controller/products.controller";

import { Router } from "express";

const router = Router();

router.route("/enterproducts").post(EnterProducts);
router.route("/getallproducts").get(getAllProducts);
router.route("/categoryproducts").get(getProductsByCategory);
router.route("/clearallproducts").delete(deleteAllProducts);
router.route("/updateproduct/:productID").patch(updateProducts);
router.route("/addwishlist/:userID/:productID").patch(pushToWishlist)

export default router;