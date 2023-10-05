import {useState} from 'react'
import {CiSearch} from 'react-icons/ci'
import Map from './Map';
import axios from 'axios';
import { handleError,handleSuccess } from '../helper/data';
import MapMarker from './MapMarker';


export default function CreateNew() {

    const [placeDetails,setPlaceDetails]=useState({
        placeName:'',
        description:'',
        location:''
    })
    const [coord,setCoord]=useState();

    //for adding new places
    const handleInputChanges=(e)=>{
        setPlaceDetails(prev=>({...prev,[e.target.name]:e.target.value}))
    }

       //change geo-location into geo-code
const geoCodeLocation =  async(location) => {
    try {
        const response = await axios.get(
        `https://nominatim.openstreetmap.org/search?q=${location}&format=json`
        );
        if (response.data.length > 0) {
        const { lat, lon } = response.data[0];
        setCoord([parseFloat(lat), parseFloat(lon)]);
        }
    } catch (error) {
        console.error(error);
    }
    };

    geoCodeLocation('hyderabad')

    const handleSubmit=async(e)=>{
        e.preventDefault();
        const {placeName,description,location} = placeDetails;
        try{
            const response=await axios.post('http://localhost:8080/create',
            {placeName,description,location,coord})
            handleSuccess(response.data.message)
        }
        catch(err){
            handleError(err.response.data.message);
        }
        setPlaceDetails({placeName:'',description:'',location:''})
        }


    return (
    <div className='z-0'>
        <div className='flex flex-col gap-2 z-10 absolute right-20 top-32 bg-white border-2 border-green rounded-md px-3 py-2'>
            <form className='flex flex-col' onSubmit={handleSubmit} >
                <label htmlFor="placeName">Place Name</label>
                <input 
                type="text" 
                name="placeName" 
                placeholder="eg:Paris" 
                required
                value={placeDetails.placeName}
                onChange={handleInputChanges}
                />
                <label htmlFor="description">Short Description</label>
                <input 
                type="text" 
                name="description" 
                placeholder="Sort Disc" 
                required
                value={placeDetails.description}
                onChange={handleInputChanges}
                />
                <label htmlFor="location">Location</label>
                <input 
                type="text" 
                name="location" 
                placeholder="eg:Paris,France" 
                required
                value={placeDetails.location}
                onChange={handleInputChanges}
                />
                <button type='submit'className="btn">Add</button>
        </form>
        </div>

        {/* <Map selectedLocation={searchPlace} onLocationChange={handleLocationChange}/> */}
        <MapMarker/>
    </div>
  )
}
