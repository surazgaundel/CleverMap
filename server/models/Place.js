const mongoose = require("mongoose");

const Place= new mongoose.Schema({
    placeName:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    }
});

module.exports= mongoose.model("Place",Place)