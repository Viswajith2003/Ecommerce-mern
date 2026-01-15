import ConnectDB from "./config/db.js";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import router from "./routes/ProductRoutes.js";

dotenv.config();

// Server configuration

const app = express();
app.use("/uploads", express.static("uploads"));

app.use(express.json());
app.use(
  cors({
    origin: "https://ecommerce-mern-roan.vercel.app",
    credentials: true,
    methods: ["POST", "GET"],
  })
);
app.use("/api/products", router);

ConnectDB();

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
