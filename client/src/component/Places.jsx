import React from 'react'
import {GrLocation} from 'react-icons/gr';
import {TbFileDescription} from 'react-icons/tb';

export default function Places({places}) {
  
  return (
    <div className='flex flex-col gap-2 w-1/2 m-auto'>
        {places && places.map(place=>{
            const {id,placeName,description,location} = place;
            return (
                <section key={id} className='border border-navyblue px-2 py-1 rounded-md'>
                    <h1 className='text-2xl font-bold'>{placeName}</h1>
                    <p className='flex items-center gap-1'><span><TbFileDescription/></span>{description}</p>
                    <h3 className='flex items-center gap-1'><span><GrLocation/></span>{location}</h3>
                </section>
            );
        })}
    </div>
  )
}
