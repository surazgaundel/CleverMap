const Place=require("../models/Place")

module.exports=async(req,res)=>{
    try{
        const {placeName,description,location}=req.body;
        const place=new Place({placeName,description,location});
        await place.save();
        return res.status(201).json({ message: 'Place created successfully' });
    }
    catch(err){
        return res.send(500).json({message:'An error occurred while creating place'})
    }
}