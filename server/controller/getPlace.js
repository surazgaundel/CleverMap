const Place=require("../models/Place")

module.exports=async(req,res)=>{
    try{
        const places=await Place.find({});
        return res.status(200).json({message:'List of place fetched successfully',places});
    }
    catch(err){
        return res.status(500).json({message:'An error occurred while fetching list of places'});
    }
}