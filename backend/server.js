import ConnectDB from "./config/db.js"
import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import router from "./routes/ProductRoutes.js"

dotenv.config();

const app=express();


app.use(express.json())
app.use(cors(
    {
        origin:"http://localhost:5173/",
        credentials:true,
        methods:["POST","GET"],
    }
))
app.use("/api/products",router)


ConnectDB();



const PORT=process.env.PORT || 5001
app.listen(PORT,()=>console.log(`Server running on ${PORT}`))