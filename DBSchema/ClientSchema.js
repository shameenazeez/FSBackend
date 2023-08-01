const mongoose=require("mongoose")

const userSchema=mongoose.Schema({
    ClientName:{type: String},
    Role:{type: String},
    Email:{type: String},
    SigninStatus:{type: Boolean} ,   
    Contact:{type: String}  
   


})

const Client=mongoose.model(" ClientData", userSchema)

module.exports=Client