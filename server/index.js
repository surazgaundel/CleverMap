require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors=require("cors");
const cookieParser = require("cookie-parser");

//controller
const NewUser = require("./controller/NewUser");
const LoginUser = require("./controller/LoginUser");
const Logout = require("./controller/Logout");
const getPlace = require("./controller/getPlace");
const createPlace = require("./controller/createPlace");
const verifyJWT = require("./middleware/verifyJWT");


//middleware
mongoose.set('strictQuery', true);


//connect to Mongo
mongoose.connect(process.env.DATABASE_URL,{useNewUrlParser:true, useUnifiedTopology:true})
.then(()=>console.log("Connected to MongoDB"))
.catch(err=>console.log(err.message))


//BodyParser
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());
app.use(cookieParser());


//Route for save the new user in db.
app.post('/register',NewUser);

//route for login endpoint
app.post('/login', LoginUser);

//route for logout
app.post('/logout', Logout);

//endpoint for fetching place
app.get('/places',getPlace);

//end for home endpoint
app.get('/isUserAuth',verifyJWT,(req,res)=>{
    res.json({isLoggedIn:true,email:req.user.email})
})
//endpoint for adding place 
app.post('/create',createPlace);

app.use((req,res)=>{res.send('404 Page not found')})




const PORT= process.env.PORT || 8000;
app.listen(PORT, console.log("Server running ",PORT))