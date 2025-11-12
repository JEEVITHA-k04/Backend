import express from "express";
import { stone, Warrior } from "../controllers/authController.js";

const router = express.Router();
router.post("/warrior", Warrior);
router.get("/stone/:id", stone)
export default router;