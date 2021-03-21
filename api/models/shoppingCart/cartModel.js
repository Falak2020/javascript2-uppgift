const mongoDb=require('mongoose')
const Card=require('./cartSchema')
var ObjectId = require('mongodb').ObjectId;

exports.saveProduct=(req,res)=>{

//     Card.findOne({_id:req.body._id})
//        .then(exists=>{
//           if(exists){
//               console.log(exists)
//             res.sendStatus(400).json({
//              statusCode:400,
//              status:false,
//             message:'A product alread exists update it instead'
            
          
//         })
//         return true
//    }  
// })
 const collection = new Card({

    _id:req.body._id,
    cartContents:req.body.cartContents
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

exports.updateCart = (req, res) => {
  let id1= new ObjectId(req.params.id)
  console.log(req.params.id)
    Card.updateOne( { _id:req.params.id }, {
       
      cartContents:req.body.cartContents,
       modified: Date.now()
      })
      .then(() => {
        res.status(200).json({
          statusCode: 200,
          status: true,
          message: 'The shopping cart is updated'
        })
      })
      .catch(() => {
        res.status(500).json({
          statusCode: 500,
          status: false,
          message: 'Failed to update the shopping cart'
        })
      })
    
    }