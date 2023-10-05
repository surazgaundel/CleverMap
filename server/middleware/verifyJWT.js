require("dotenv").config();


module.exports=(req,res,next)=>{
    const token=req.headers["x-access-token"]?.split(' ')[1];

    if(token){
        jwt.verify(token,process.env.ACCESS_SECRET_KEY,(err,user)=>{
            if(err){
                return res.json({isLoggedIn:false, message:'Failed to authenticate'})
            }
            req.user=user;
            req.user.id=user.id;
            next();
        })
    }else{
        return res.json({message:'Incorrect Token',isLoggedIn:false})
    }
}