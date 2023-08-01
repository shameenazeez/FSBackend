
const Customer=require("../DBSchema/CustomerSchema")

const CreateCustomer=async(req,res)=>{
    const {CustomerName,Address,Village,District,State}=req.body;
    const CustomerDatas=await Customer.create(
        {
            CustomerId,
            Address,
            Village,
            District,
            State
        }
    )
    res.json({
       CustomerId:CustomerDatas.CustomerId,
       Address:CustomerDatas.Address,
       Village:CustomerDatas.Village,
       District:CustomerDatas.District,
       State:CustomerDatas.State,
       

    })

}

const getCustomerData=async(req,res)=>{
    const {CustomerId}=req.body

    const CustomerData=await Customer.find({})
      if(CustomerData){
        res.json(CustomerData)
      }
}

const UpdateCustomer =async (req,res)=>{
    const {  CustomerId,Address,  Village, District, State}=req.body;
    const {_id} =req.body;
    const CustomerUpdateData=await Customer.findByIdAndUpdate(_id,{ CustomerId,Address,  Village, District, State})
    res.json(CustomerUpdateData)

}

const DeleteCustomer =async(req,res)=>{

    //  const {_id} = req.body
    const _id = req.params.customerdel
    // console.log(_id);
    const deletedCustomer= await Customer.deleteOne({_id})
    
    res.json({
        aknowledged:deletedCustomer.acknowledged
    }     
        )   
        
}  

module.exports={CreateCustomer,getCustomerData,UpdateCustomer,DeleteCustomer}  