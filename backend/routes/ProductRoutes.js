import { getProducts, CreateProduct } from "../controllers/ProductControllers.js";
import express from "express";

const router = express.Router();

router.get("/", getProducts);
router.post("/", CreateProduct);

export default router;
