import {useState} from 'react'
import { MapContainer, Popup, TileLayer, Marker,useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { DivIcon, Icon } from 'leaflet'

export default function Map({places}) {

  const customIcon=(name)=>new DivIcon({
    className:'custom-marker',
    html:`<div 
    style="
    background-color:#263657;
    color:#e4eff2; 
    display:flex;
    justify-items:center;
    width:6rem; 
    border-radius:10px;
    padding:0.25rem 0.5rem;
    font-weight:600;
    position:absolute;
    top:-25px;
    left:-20px;
    "
    >${name}</div>`
  })

  
  return (
    <div className="w-[90%] m-auto mt-5">
        <MapContainer
        className='map'
        center={[17.416762, 78.439944]}
        zoom={13}
        onClick={()=>console.log('Clck')}
        >
        <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
        {
            places.map(marker=>{
              const {id,coord,placeName}=marker;
                return (
                  <Marker key={id} position={coord} icon={customIcon(placeName)}>
                  </Marker>
                )
            })
        }
        </MapContainer>
    </div>
  )
}
