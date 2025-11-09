import express from "express";
import {controller, reverseController, sum} from "../controller/controller.js"
const router = express.Router();

router.post("/data", controller)
router.post("/reverse",reverseController)
router.post("/add",sum)
export default router