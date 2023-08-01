const User=require("../DBSchema/schema")

const Product=require("../DBSchema/ProductSchema")

const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")



const signUp=async(req,res)=>{
    //retrieving data from postman or api
    const {name,email,password}=req.body
    const salt= await bcrypt.genSalt(10);
    const hashedPassword=await bcrypt.hash(password,salt)
    console.log(hashedPassword);
    
    let pl= password.length
    /******if entered email already exists in db then failed to add****/
    const duplicate=await User.findOne({email:email})
    if (duplicate)
   {
     res.json(
      { message:"this email already exists",
       isDuplicate:true}
    )
   }

/***if one of the field is empty  and password is less than 6****/
else if(!name || !email || !password ){
   res.json("enter all details",
              )
}
else if (pl < 6){
        res.json({message:"password is too small",
             isPasswordSmall:true})
    }

else {
    const userDetails =await User.create({
                 name,
                 email,
                 password:hashedPassword
                 })
            res.json({
                name:userDetails.name,
                email:userDetails.email,
                token:tokenGeneration(userDetails.id)

            })
}
  
}
  
const Login = async (req,res)=>{
    const {email,password} =req.body;
    const userData=await User.findOne({email:email})
    
    if(userData && await bcrypt.compare(password,userData.password)){
        res.json({
            message:"login success",
            name:userData.name,
            email:userData.email,
            userId:userData._id,
            token:tokenGeneration(userData.id)
          })

    }
    else{ 
        res.json({
            message:"login failed",
            isError:true
        })     
    }

}
const tokenGeneration=(id)=>{
    return jwt.sign({id},"tokenSecretCode",{expiresIn:"1d"})
   
   }
   //tokensecretcode is used as a secret code

   const CreateCartUser=async(req,res)=>{
    
    const _id=req.body._id;
     const userCart= await User.updateOne({_id},{
     $addToSet : {cart :{ product:req.body.ProductId,
    
         count:req.body.count}},
   }
   )  

 
   if(userCart){
    res.json(   
     userCart
    )
   }
               
}      
     
const cartTotalUpdate=async(req,res)=>{          
    const _id=req.body._id
    const cartTotal=req.body.cartTotal
    const cartData=await User.updateOne({_id},
        {
         cartTotal:cartTotal
        })
  
 // console.log(cartData);
} 


  
const countUpdate=async(req,res)=>{          
    const _id=req.body.user
    
    const cartData=await User.updateOne({_id, cart:{$elemMatch :{_id:req.body.cartItemId}}},
        {
            $set : {'cart.$.count' :req.body.count}
        })
  
  
}  
const getCart=async(req,res)=>{
    const _id=req.body._id
    const cartData=await User.findOne({_id}).populate('cart.product')
    if (cartData){
        res.json({
     cartData
        })
    }  
    // console.log(cartData);        
}    

const delCart=async(req,res)=>{
    const _id=req.body.user 
    const cartItemId=req.body.cartItemId

    
    const deletedCartItem=await User.updateOne({_id},
        {$pull: {cart : {_id :cartItemId}} }  
        )
        
        console.log(cartItemId);
        console.log(_id)
          
       
}
   
  
module.exports= {signUp,Login,CreateCartUser,delCart,getCart,countUpdate,cartTotalUpdate}         