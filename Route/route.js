const express=require("express")
const router=express.Router()
const {addCateogory,getCateogory} = require("../Controller/CategoryController")

const { CreateClient, getClientData, UpdateClient, DeleteClient } = require("../Controller/ClientController")

const {signUp, Login, CreateCartUser, addToCart, delCart, getCart, countUpdate, cartTotalUpdate} = require("../Controller/controller")
const { CreateCustomer, getCustomerData, UpdateCustomer, DeleteCustomer } = require("../Controller/CustomerController")
const { CreateProduct, getProductData, UpdateProduct, DeleteProduct } = require("../Controller/ProductController")
const { CreateSale, getSalesData, UpdateSale, DeleteSale } = require("../Controller/SalesController")


router.route("/signup").post(signUp)
router.route("/login").post(Login)

router.route("/createsale").post(CreateSale)  
router.route("/getsale").get(getSalesData)
router.route("/updatesale").put(UpdateSale)
router.route("/deletesale/:del").delete(DeleteSale)

router.route("/createcustomer").post(CreateCustomer)
router.route("/getcustomer").get(getCustomerData)
router.route("/updatecustomer").put(UpdateCustomer)
router.route("/deletecustomer/:customerdel").delete(DeleteCustomer)

router.route("/createproduct").post(CreateProduct)
router.route("/getproduct").get(getProductData)
router.route("/updateproduct").put(UpdateProduct)
router.route("/deleteproduct/:delproduct").delete(DeleteProduct)

router.route("/createclient").post(CreateClient)
router.route("/getclient").get(getClientData)
router.route("/updateclient").put(UpdateClient)
router.route("/deleteclient/:clientdel").delete(DeleteClient)


router.route("/addcategory").post(addCateogory)
router.route("/getcategory").get(getCateogory)

// router.route("/createcart").post(CreateCart)  
// router.route("/getcart").get(getCartData)
// router.route("/updatecart").put(UpdateCart)
// router.route("/deleteclient/:delcart").delete(DeleteCart)
// router.route("/deletecart").delete(DeleteCart)

router.route("/createcart").post(CreateCartUser)  
router.route("/gotocart").post(getCart)  
router.route("/delcart").post(delCart) 
router.route("/updatecount").post(countUpdate)  
router.route("/updatecarttotal").post(cartTotalUpdate) 
  
module.exports=router     