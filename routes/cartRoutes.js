import express from "express";

import {
    getCart,
    addToCart,
    removeFromCart
} from "../controllers/cartController.js";

const router = express.Router();

router.get("/cart", getCart);

router.post("/cart/add/:id", addToCart);

router.post("/cart/remove/:id", removeFromCart);

export default router;