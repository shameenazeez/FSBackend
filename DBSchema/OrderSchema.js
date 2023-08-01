const mongoose=require("mongoose")

const orderSchema=mongoose.Schema({
    orderedUser:
        {
                type:mongoose.Schema.Types.ObjectId,
                ref:'data'
            
        
        },
    
    paymentIntent: {},
    orderStatus:{
        type:String,
        default:"Not Processed",
        enum :[
            "Not Processed",
            "Cash on Delivery",
            "Processing",
            "Dispatched",
            "Cancelled",
            "Delivered"
        ]
    },
    orderby:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"data "
    }
  
   


})

const Order=mongoose.model(" OrderData", orderSchema)

module.exports=Order