import mongoose from "mongoose";
const orderSchema = mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    items: [{
        name: String,
        price: Number,
        description: String,
        quantity: Number,
        imgUrl: String
    }],
    orderValue: {
        type: Number
    },
    orderStatus: {
        type: String,
        default: "Pending"
    }
},
    { timestamps: true }
)
export default mongoose.model("Order", orderSchema)