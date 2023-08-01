// const { findByIdAndUpdate, findByIdAndDelete } = require('../DBSchema/SalesSchema');
const Product=require('../DBSchema/ProductSchema')
const cloudinary=require('../Cloudinary/cloudinary')

const CreateProduct=async(req,res)=>{
    const {   ProductName,
        Category,
        Description,
        Price ,
        Availability,
        image}=req.body;
       // console.log(image)
        const uploadRes = await cloudinary.uploader.upload(image,{
                         upload_preset:"onlineShop"})

                         const ProductDatas= await Product.create(
                                    {
                                        ProductName,
                                        Category,
                                        Description,
                                        Price ,
                                        Availability ,
                                        image:uploadRes
                                    }   
                                )    
                                res.json({
                                    ProductName:ProductDatas.ProductName,
                                        Category:ProductDatas.Category,
                                        Description:ProductDatas.Description,
                                        Price:ProductDatas.Price,
                                        Availability:ProductDatas.Availability,
                                        image:ProductDatas.image
                                })

       
    }

const getProductData=async(req,res)=>{
    const {ProductName}=req.body

    const ProductData=await Product.find({})
      if(ProductData){
        res.json(ProductData)
      }
}

const UpdateProduct=async (req,res)=>{
    const {   ProductName,
        Category,
        Description,
        Price ,
        Availability}=req.body;
        // const uploadRes = await cloudinary.uploader.upload(image,{
        //     upload_preset:"onlineShop"})
    const {_id} =req.body;
    const UpdateData=await Product.findByIdAndUpdate(_id,{ProductName,Category, Description,Price,Availability})
    res.json(UpdateData)

}

const DeleteProduct =async(req,res)=>{

    //  const {_id} = req.body
    const _id = req.params.delproduct
    // console.log(_id);
    const deletedProduct = await Product.deleteOne({_id})
    
    res.json({    
        aknowledged:deletedProduct.acknowledged  
    }     
        )     
        
}  

      

module.exports={CreateProduct,getProductData,UpdateProduct,DeleteProduct}  