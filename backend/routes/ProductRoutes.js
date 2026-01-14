import { getProducts, CreateProduct } from "../controllers/ProductControllers.js";
import express from "express";
import upload from "../middleware/upload.js";

const router = express.Router();

router.get("/", getProducts);
router.post("/",upload.single("image"), CreateProduct);

export default router;
