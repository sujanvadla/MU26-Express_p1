import * as productService from "../services/productService.js"
const getProducts = async (req, res) => {
    try {
        const products = await productService.getProducts()
        res.status(200).json({
            success: true,
            products: products
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}
const getProduct = async (req, res) => {
    try {
        const { productId } = req.params
        const product = await productService.getProduct(productId)
        res.status(200).json({
            success: true,
            product: product
        })
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}
const createProduct = async (req, res) => {
    try {
        const product = await productService.createProduct(req.body)
        res.status(201).json({
            success: true,
            product: product
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}
const deleteProduct = async (req, res) => {
    try {
        const { productId } = await req.params
        const product = await productService.deleteProduct(productId)
        res.status(200).json({
            success: true,
            product: product
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })

    }
}
const updateProduct = async (req, res) => {
    try {
        const { productId } = await req.params
        const product = await productService.updateProduct(productId, req.body)
        res.status(200).json({
            success:true,
            product:product
        })
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

export {createProduct,updateProduct,deleteProduct,getProduct,getProducts}