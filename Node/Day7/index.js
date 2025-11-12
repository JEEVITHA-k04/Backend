import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js"
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use("/api/avengers", authRoutes)
app.listen(PORT, ()=>{
    console.log(`Server running successfully ${PORT}`);
})