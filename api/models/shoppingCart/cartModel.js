const mongoDb=require('mongoose')
const Card=require('./cartSchema')

exports.saveProduct=(req,res)=>{
   
   const collection = new Card({
    // _id:req.user._id,//jag tar det from user
    cartContents:req.body,
   })
    collection.save()
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
            message:'can not add to DB'
        })
     })
}