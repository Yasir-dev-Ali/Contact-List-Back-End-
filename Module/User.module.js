const mongoose= require("mongoose")

const userSchema = new mongoose.Schema({
    id:{
        type:String,
        required:[true,"Please provide the id"]
        

    },
    
    name:{
        type:String,
        required:[true,"Please provide the name"]
    },
    email:{
        type:String,
        required:[true,"Please provide the email"],
        unique:true
    },
    password:{
        type:String,
        required:[true,"Please provide the password"]

    }

},{timestamps:true})

module.exports = mongoose.model("User",userSchema)
