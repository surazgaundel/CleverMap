import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const position = [17.416762, 78.439944];
const GEOCODE_URL = "https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/reverseGeocode?f=pjson&langCode=EN&location=";

export default function MapMarker() {
  const [markerPosition, setMarkerPosition] = useState(null);
  const [address, setAddress] = useState("");

  const setMarker =async (e) => {
    console.log(e)
    setMarkerPosition(e.latlng);
    await reverseGeoCoding(e.latlng);
  }

  const getMarker = () => {
    if (markerPosition) {
      return (
        <Marker position={markerPosition}>
          <Popup offset={[0, -18]} className="font-weight-bold">
            {getStringMarkerPosition()}
          </Popup>
        </Marker>
      );
    }
  }

  const getStringMarkerPosition = () => (
    <div>
      {address}
      <br />
      {markerPosition.lat.toFixed(8) + ", " + markerPosition.lng.toFixed(8)}
    </div>
  );

  const reverseGeoCoding = async (coordinates) => {
    console.log(coordinates)
    const data = await (await fetch(GEOCODE_URL + `${coordinates.lng},${coordinates.lat}`)).json();
    const addressLabel = data.address !== undefined ? data.address.LongLabel : "Unknown";
    setAddress(addressLabel);
  }
  return(
    <MapContainer center={position} zoom={13} onClick={setMarker}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" 
        attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors" />
      {getMarker()}
    </MapContainer>
  );
}
