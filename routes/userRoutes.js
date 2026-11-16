import express from "express";

import {
    getAccount,
    updateAccount
} from "../controllers/userController.js";

const router = express.Router();

router.get("/account", getAccount);
router.post("/account/update", updateAccount);

export default router;