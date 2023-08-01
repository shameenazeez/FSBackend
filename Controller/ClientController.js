// const { findByIdAndUpdate, findByIdAndDelete } = require('../DBSchema/SalesSchema');
const Client=require('../DBSchema/ClientSchema')

const CreateClient=async(req,res)=>{
    const {  ClientName,
        Role,
        Email,
        SigninStatus,   
        Contact}=req.body;
    const ClientDatas=await Client.create(
        {
            ClientName,
            Role,
            Email,
            SigninStatus,   
            Contact
        }
    )
    res.json({
        ClientName:ClientDatas.ClientName,
        Role:ClientDatas.Role,
        Email:ClientDatas.Email,
        SigninStatus:ClientDatas.SigninStatus,  
        Contact:ClientDatas.Contact
       

    })

}

const getClientData=async(req,res)=>{
    const {ClientName}=req.body

    const ClientData=await Client.find({})
      if(ClientData){
        res.json(ClientData)
      }   
}

const UpdateClient =async (req,res)=>{
    const {   ClientName,
        Role,
        Email,  
        SigninStatus,   
        Contact}=req.body;
    const {_id} =req.body;
    const ClientUpdateData=await Client.findByIdAndUpdate(_id,{   ClientName,
        Role,
        Email,
        SigninStatus,   
        Contact})
    res.json(ClientUpdateData)

}

const DeleteClient =async(req,res)=>{

    //  const {_id} = req.body
    const _id = req.params.clientdel
    // console.log(_id);
    const deletedClient= await Client.deleteOne({_id})
    
    res.json({
        aknowledged:deletedClient.acknowledged
    }     
        )   
        
}  

module.exports={CreateClient,getClientData,UpdateClient,DeleteClient}  