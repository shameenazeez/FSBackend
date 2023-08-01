const Category=require("../DBSchema/CategorySchema")
const addCateogory=async(req,res)=>{
    const {category}=req.body;
    const categoryData=await Category.create({
         category
    })
    console.log(categoryData);
}
const getCateogory=async(req,res)=>{
    const _id=req.body;
    const categoryData=await Category.find({})
    res.json(categoryData)
    
}  
module.exports={addCateogory,getCateogory}    