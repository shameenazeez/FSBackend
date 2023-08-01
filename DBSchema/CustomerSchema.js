const mongoose=require("mongoose")

const userSchema=mongoose.Schema({
    CustomerName:{type: String},
    Address:{type: String},
    Village:{type: String} ,   
    District:{type: String} ,  
    State:{type: String}   


})

const Customer=mongoose.model(" CustomerData", userSchema)

module.exports=Customer