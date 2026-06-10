import Product from "../models/productModel.js"

const createProduct = async (productData) => {
    return await Product.create(productData)
}
const getProducts = async () => {
    return await Product.find()
}
const deleteProduct = async (productId) => {
    return await Product.findByIdAndDelete(productId)
}
const getProduct = async (productId) => {
    return await Product.findOne({ _id: productId })
}
const updateProduct = async (productId, productData) => {
    return await Product.findByIdAndUpdate(productId, productData)
}

export {createProduct,getProduct,getProducts,updateProduct,deleteProduct}