import { Router } from "express";
import {
  productList,
  getProductInfoById,
} from "../controllers/product.controller.js";

const router = Router();

router.get("/test", (req, res) => {
  res.json(["ok"]);
});

router.get("/productList", productList);

router.get("/:id", getProductInfoById);

export default router;
