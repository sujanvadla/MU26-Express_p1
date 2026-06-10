import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import userRoutes from "./routes/userRoutes.js"
import productRoutes from "./routes/productRoutes.js"
import orderRoutes from "./routes/orderRoutes.js"
dotenv.config()
const app = express();
app.use(express.json());
app.use(cors())
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/orders",orderRoutes)
export default app