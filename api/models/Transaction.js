const mongoose=require('mongoose')

const transactionSchema=new mongoose.Schema({
   name:{
    type:String,
    required:true
   } ,
   price:{
    type:Number,
    required:true
   } ,
   description:{
    type:String,
    required:true
   },
   datetime:{
    type:String,
    required:true
   }
})

const transactionModel=mongoose.model('Transaction',transactionSchema)
module.exports=transactionModel