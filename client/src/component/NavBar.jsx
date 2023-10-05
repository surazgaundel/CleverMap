import React from 'react'
import { navbarLinks } from '../helper/data'
import { Link, NavLink } from 'react-router-dom'

export default function NavBar() {
  return (
    <div className="bg-navyblue py-5 flex flex-col md:flex-row items-center justify-around">
        <Link to='/dashboard'><h1 className="text-3xl w-1/2 font-bold tracking-widest text-white uppercase">Clever.Map</h1></Link>
        <section className='flex justify-around w-full'>
        {navbarLinks.map(link=>{
            return(
            <NavLink to={link.link} key={link.id} className="flex items-center gap-2 capitalize text-graywhite hover:scale-105" >{link.name}<span>{link.icon}</span></NavLink>

            )
        })}
        </section>
    </div>
  )
}
