import React, { useEffect, useState } from 'react'
import Map from './Map'
import Places from './Places';
import axios from 'axios';

export default function Dashboard() {
    const [view,setView]=useState('');
    const [places,setPlaces]=useState([]);

    const handleView=(view)=>{
        if(view=='map'){
            setView('map');
        }else{
            setView('list')
        }
    }
    //get the places list from server.
    useEffect(()=>{
        getPlaces();
    },[])
    
    const getPlaces=async()=>{
        try{
        const response= await axios.get('http://localhost:8080/places');
        setPlaces(response.data.places);
        }
        catch(err){
            console.error(err);
        }
    }
        
    return (
    <div>
        <div className="flex justify-center my-5">
        <button onClick={()=>handleView('list')} className="btn">List View</button>
        <button onClick={()=>handleView('map')}className="btn">Map View</button>
        </div>
        {view=='list'?<Places places={places}/>:<Map places={places}/>}
    </div>
  )
}
