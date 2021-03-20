mongoDb=require('mongoose')
const CartSchema = mongoDb.Schema({
    _id:{ type:String},
    cartContents: {
        type: [Object]
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoDb.model('Cart', CartSchema)
