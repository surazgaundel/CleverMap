const mongoose = require("mongoose");

const User= new mongoose.Schema({
    fullName:{
        type:String,
        required:true,
        unique:true,
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
    }
});

module.exports= mongoose.model("User",User);