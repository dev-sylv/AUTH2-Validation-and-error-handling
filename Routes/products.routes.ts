import { EnterProducts } from "../Controller/products.controller";

import { Router } from "express";

const router = Router();

router.route("/enterproducts").post(EnterProducts);

export default router;