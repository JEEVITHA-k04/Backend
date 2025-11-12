import express from "express";
import { Details, MovieWithId, NewMovie } from "../controllers/Controllers.js";
const router = express();

router.get("/datas", Details);
router.get("/datas/:id", MovieWithId)
router.post("/newdata", NewMovie)
export default router;