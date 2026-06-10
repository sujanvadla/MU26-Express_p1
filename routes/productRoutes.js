import express from "express"
import * as productController from "../controllers/productController.js"
const router = express.Router()
router.get("/get",productController.getProducts)
router.get("/getProduct/:productId",productController.getProduct)
router.post("/create",productController.createProduct)
router.delete("/delete/:productId",productController.deleteProduct)
router.patch("/update/:productId",productController.updateProduct)

export default router