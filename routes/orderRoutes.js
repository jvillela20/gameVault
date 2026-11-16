import express from "express";

import {
    placeOrder,
    getOrder
} from "../controllers/orderController.js";

const router = express.Router();

router.post("/order/place", placeOrder);
router.get("/order/:id", getOrder);

export default router;