import Order from "../models/orderModel.js"

const createOrder = async (orderData) => {
    return await Order.create(orderData)
}
const getOrders = async () => {
    return await Order.find()
}
const getMyOrders = async (email) => {
    return await Order.find({ email: email })
}
const updateOrder = async (orderId) => {
    return await Order.findByIdAndUpdate(orderId, {orderStatus:"Delivered"})
}

export {createOrder,updateOrder,getMyOrders,getOrders}