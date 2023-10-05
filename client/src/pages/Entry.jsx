import {useState} from 'react'
import { socialMedia } from '../helper/data'
import { Link, Outlet } from 'react-router-dom'


export default function Entry() {
  const [isLogin,setIsLogin]=useState(false);
  return (
    <>
    <div className="hidden md:block container"></div>
    <div className="flex flex-col md:flex-row justify-center space-around h-screen items-center">
      <div className="flex flex-col items-center gap-5 md:gap-0 md:justify-between md:h-[90%] md:text-graywhite w-1/2">
        <h1 className="text-xl font-bold tracking-widest pl-5 uppercase">Clever.Map</h1>
        <p className='m-auto md:w-1/2 text-4xl text-center lg:text-6xl font-bold tracking-wide'>Cleverly find your favorite place</p>
        <section className="flex justify-center items-center text-2xl md:text-4xl gap-5 ">
        {socialMedia.map(media=>{
          return(
            <Link to={media.link} key={media.id} className="hover:scale-105" target="_blank" rel="noopener noreferrer">{media.icon}</Link>
            )
          })}
          </section>
      </div>
      <div className="flex-col-center h-[90%] w-full md:w-1/2">
        <Outlet/>
        <p className='text-center'>
          {!isLogin?`Already have an account?`:`Don't have an account?`} <span className='font-semibold underline hover:font-bold'>
            <Link onClick={()=>setIsLogin(prev=>!prev)} to={isLogin?`register`:'login'}>{!isLogin?'Log In':'Sign Up'}</Link></span>
        </p>
      </div>
    </div>
    </>
  )
}
