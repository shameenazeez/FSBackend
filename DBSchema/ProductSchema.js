const mongoose=require("mongoose")
const {Schema}=mongoose;

const productSchema=mongoose.Schema({
   ProductName:{type: String},
   Category:{type: String},
   Description:{type: String},
   Price:{type: Number} ,
   Availability:{type:Boolean},
   image :{type:Object}
   
  
 
})

const Product=mongoose.model("ProductData",productSchema)

module.exports=Product     