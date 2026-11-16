import express from "express";

import {
    getReviews,
    addReview
} from "../controllers/reviewController.js";

const router = express.Router();

router.get("/reviews", getReviews);
router.post("/reviews/add", addReview);

export default router;