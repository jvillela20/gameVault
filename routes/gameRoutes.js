import express from "express";
import {
    getHome,
    getCatalog
} from "../controllers/gameController.js";

const router = express.Router();

router.get("/", getHome);
router.get("/catalog", getCatalog);

export default router;