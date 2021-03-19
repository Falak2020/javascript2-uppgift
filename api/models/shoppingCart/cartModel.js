const mongoDb=require('mongoose')
const Cart=require('./cartSchema')

exports.saveProduct=(req,res)=>{
   const cart = new Cart({
    customerID:req.body.id,
    cartContents:req.body,
   })
    cart.save()
    .then(()=>{
     res.status(201).json({
         statusCode:201,
         status:true,
         message:'successful'
     })
    })
     .catch(()=>{
        res.status(500).json({
            statusCode:500,
            status:false,
            message:'can not creat the product'
        })
     })
}