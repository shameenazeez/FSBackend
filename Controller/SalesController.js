// const { findByIdAndUpdate, findByIdAndDelete } = require('../DBSchema/SalesSchema');
const Sales=require('../DBSchema/SalesSchema')

const CreateSale=async(req,res)=>{
    const {SaleName,District,State,Location}=req.body;
    const SalesDatas=await Sales.create(
        {
            SaleName,
            District,
            State,
            Location
        }
    )
    res.json({
        SaleName:SalesDatas.SaleName,
        District:SalesDatas.District,
        State:SalesDatas.State,
        Location:SalesDatas.Location
    })

}

const getSalesData=async(req,res)=>{
    const {SaleName}=req.body

    const SalesData=await Sales.find({})
      if(SalesData){
        res.json(SalesData)
      }
}

const UpdateSale=async (req,res)=>{
    const {SaleName,District,State,Location}=req.body;
    const {_id} =req.body;
    const SalesUpdateData=await Sales.findByIdAndUpdate(_id,{SaleName,District,State,Location})
    res.json(SalesUpdateData)

}

const DeleteSale =async(req,res)=>{

    //  const {_id} = req.body
    const _id = req.params.del
    // console.log(_id);
    const deletedUser = await Sales.deleteOne({_id})
    
    res.json({
        aknowledged:deletedUser.acknowledged
    }     
        )   
        
}  

module.exports={CreateSale,getSalesData,UpdateSale,DeleteSale}  