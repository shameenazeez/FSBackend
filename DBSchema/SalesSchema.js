const mongoose=require("mongoose")

const userSchema=mongoose.Schema({
    SaleName:{type: String},
    District:{type: String},
   State:{type: String},
   Location:{type: String}    


})

const Sales=mongoose.model("SalesData", userSchema)

module.exports=Sales