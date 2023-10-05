import axios from 'axios';
import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { handleSuccess,handleError } from '../helper/data';

export default function SignUp() {
    const [userDetails,setUserDetails]=useState({
        fullName:'',
        email:'',
    password:'',
})
const navigate=useNavigate();

  // handle submit of user credential
  const handleInputChanges=(e)=>{
    setUserDetails(prev=>({...prev,[e.target.name]:e.target.value}))
  }

  const handleSubmit=async(e)=>{
    e.preventDefault();
    const {fullName,email,password} = userDetails;
    try{
        const response=await axios.post('http://localhost:8080/register',{
            fullName,email,password
        })
        if(response.status===201){
            handleSuccess(response.data.message)
            navigate('login');
        }
    }
    catch(err){
        handleError(err.response.data.message)
        
    }
    setUserDetails({fullName:'',email:'',password:'',})
  }

return (
<div className='w-[80%]'>
    <section className="flex-col-center gap-2 py-5 shadow-md rounded-md my-5">
    <h1 className="text-2xl font-bold">Sign Up</h1>
    <p className="font-semibold">Create your account</p>
    <form action="POST" onSubmit={handleSubmit} className="flex flex-col items-center gap-2 justify-center">
        <label htmlFor="text">Full Name</label>
        <input 
        type="text" 
        name="fullName" 
        placeholder="eg:Ram" 
        required
        value={userDetails.fullName}
        min={3}
        onChange={handleInputChanges}
        />
        <label htmlFor="email">Email address</label>
        <input 
        type="email" 
        name="email" 
        placeholder="abc@email.com" 
        required
        value={userDetails.email}
        onChange={handleInputChanges}
        />
        <label htmlFor="password">Password</label>
        <input 
        type="password" 
        name="password" 
        placeholder="*******" 
        required
        min={4}
        value={userDetails.password}
        onChange={handleInputChanges}
        />
        <button type='submit' className="btn">Register</button>
    </form>
    </section>
</div>
)
}
