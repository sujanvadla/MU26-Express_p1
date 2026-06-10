import * as orderService from "../services/orderService.js"
const getOrders = async (req, res) => {
    try {
        const orders = await orderService.getOrders()
        res.status(200).json({
            success: true,
            orders: orders
        })
    } catch (error) {
        res.json(500).json({
            success: false,
            message: error.message
        })
    }
}
const getMyOrders = async (req, res) => {
    try {
        const {email} = req.params
        const orders = await orderService.getMyOrders(email)
        res.status(200).json({
            success: true,
            orders: orders
        })
    } catch (error) {
        res.json(500).json({
            success: false,
            message: error.message
        })
    }
}

const createOrder = async (req, res) => {
    try {
        const orders = await orderService.createOrder(req.body)
        res.status(200).json({
            success: true,
            order: order
        })
    } catch (error) {
        res.json(500).json({
            success: false,
            message: error.message
        })
    }
}


const updateOrder = async (req, res) => {
    try {
        const {orderId} = await req.params
        const orders = await orderService.updateOrder(orderId)
        res.status(200).json({
            success: true,
            order: order
        })
    } catch (error) {
        res.json(500).json({
            success: false,
            message: error.message
        })
    }
}

export {getMyOrders,getOrders,createOrder,updateOrder}