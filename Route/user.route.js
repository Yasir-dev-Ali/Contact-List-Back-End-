const express =require("express");
const router =express.Router()
const validateToken =require("../Middleware/validateToken")

const {registerUser,LoginUser,getCurrentUser}= require("../controller/user.controler")

router.post("/register",registerUser)
router.post("/login",LoginUser)
router.get("/current", validateToken , getCurrentUser)
module.exports =router  

