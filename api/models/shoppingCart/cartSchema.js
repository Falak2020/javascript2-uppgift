mongoDb=require('mongoose')
const CartSchema = mongoDb.Schema({
    customerID: {
        type: String,
        required: true
    },
    cartContents: {
        type: [Object]
    },
    date: {
        type: Date,
        default: Date.now
    }
})

const Cart = mongoDb.model('Cart', CartSchema)
module.exports = Cart