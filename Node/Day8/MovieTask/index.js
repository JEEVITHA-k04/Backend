import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import authRoute from "./routes/authRoute.js"
dotenv.config();
const PORT = process.env.PORT || 5000
const app = express()
app.use(cors());
app.use(express.json());
app.use("/api/tamilmovies", authRoute)

app.listen(PORT, ()=>{
    console.log(`successsfully running ${PORT}`)
})