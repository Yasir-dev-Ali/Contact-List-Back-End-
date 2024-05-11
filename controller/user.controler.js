const asyncHandler = require("express-async-handler");
const User = require("../Module/User.module");
const bycript =require("bcryptjs");
const jwt =require("jsonwebtoken");


// Register The user 
// Post Method 
// api/user/register
// access to public

const registerUser = asyncHandler(async (req, res) => {
    const {name,email,password}=req.body;
    if(!name || !email || !password){
        res.status(400)
        throw new Error("Please Fill the all fields")
    }
    const userAvailable = await User.findOne({email})
    if(userAvailable){
        res.status(400)
        throw new Error("User Already Exist")
    }
    // Hash Password
    const hashPassword= await bycript.hash(password,10)
    console.log("Hash Password",hashPassword);
    const user = await User.create({
        name,
        email,
        password:hashPassword
    
    })
    console.log(user);
    if(user){
        res.status(201).json({_id:user.id,email:user.email});
    }else{
        res.status(400)
        throw new Error("Invalid User Data")
    }

    res.json({message:"Register the User "})
});


// Login The user
// Post Method
// api/user/login
// access to public

const LoginUser = asyncHandler(async (req,res)=>{
    const {email,password}=req.body;
    if(!email || !password){
        res.status(400)
        throw new Error("Please Fill the all fields")
    }
    const user = await User.findOne({email});
    if(user && (await bycript.compare(password,user.password))){
        const accessToken=jwt.sign({
            user:{
                name:user.name,
                email:user.email,
                id:user.id
            }
        },process.env.ACCESS_TOKEN,{
            expiresIn:"30m" 
        });
        res.status(200).json({accessToken}) 
        res.json({message:"Login the User"})
    }   
    else{
        res.status(401)
        throw new Error("Invalid Email or Password")
    }
})

// Get the current user
// Get Method

// api/user/current 
// access to private
const getCurrentUser = asyncHandler(async (req,res)=>{
     res.json(req.user)


    res.json({message:"Get the Current User"});

})


module.exports = { registerUser, LoginUser, getCurrentUser }
