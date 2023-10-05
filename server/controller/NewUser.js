const bcrypt=require("bcrypt");
const User=require("../models/User");


module.exports=async(req,res)=>{
    try{
        const {fullName,email,password} = req.body;
        if (!fullName && !email && !password) {
            return res.status(400).json({ message: "All credentials Needed" });
        }
        const hashedPassword=await bcrypt.hash(password,10);
        const user=new User({fullName,email,password:hashedPassword});
        await user.save();
        return res.status(201).json({message:'User added successfully'})
    }catch(err){
        console.log(err.message);
        return res.status(500).json({message:'An error occurred while adding new user'});
    }
}