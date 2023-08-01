const express=require("express");
const router = require("./Route/route");
const connectDB=require("./configDB/DBconnect")
const app=express();
const cors=require("cors")

connectDB();

app.get("/",(req,res)=>{
    res.json("home.....")
})

app.use(express.json())
app.use(cors())
app.use("/api",router)

app.listen(5000,console.log("server running")) 
