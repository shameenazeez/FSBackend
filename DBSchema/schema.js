const mongoose=require("mongoose")
const {Schema}=mongoose;

const userSchema=mongoose.Schema({
    
    name:{type: String},
    email:{type: String},
    password:{type: String},
  
   cart :[
             {
                 product:{
                    type:mongoose.Schema.Types.ObjectId,
                    ref:'ProductData',
                      },
                count: Number,
                Price:Number,            
                
            },      
        ] ,
   cartTotal:{type:Number,
              default:0},   
   wishlist: [{type:mongoose.Schema.Types.ObjectId,ref:'ProductData'}]
  
}
)  

const User=mongoose.model(" data", userSchema)    
   
module.exports=User   