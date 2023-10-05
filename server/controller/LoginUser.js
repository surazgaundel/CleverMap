const bcrypt=require("bcrypt");
const User=require("../models/User");
const jwt=require("jsonwebtoken");
require("dotenv").config();


module.exports=async(req,res)=>{
    try{
        const {email,password}=req.body;
        const user=await User.findOne({email});
        if(!user){
            return res.status(401).json({message:'User not exist'})
        }
        const isPasswordMatch=await bcrypt.compare(password,user.password);
        if(!isPasswordMatch){
            return res.status(401).json({message:'Invalid Credentials'})
        }
        // req.session.userId = user._id;
        const token=jwt.sign({
            id:user._id
        },process.env.ACCESS_SECRET_KEY,{expiresIn:300})
        
        return res.status(201).json({auth:true,message:'You are successfully login',token})
    }
    catch(err){
        console.log(err.message);
        return res.status(500).json({message:'An error occurred while login'});
        
    }
}