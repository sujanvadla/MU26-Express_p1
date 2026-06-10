import express from "express"
import * as orderController from "../controllers/orderController.js"
const router = express.Router()

router.get("/get",orderController.getOrders)
router.get("/getMyOrders/:email",orderController.getMyOrders)
router.post("/create",orderController.createOrder)
router.patch("/update/:orderId",orderController.updateOrder)

export default router