import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const MapDisplay = ({ coords }) => {
  const { lat, lon } = coords;
  const position = [lat, lon];

  // Using a key forces the map to re-render when the coordinates change
  return (
    <div className="map-container">
      <MapContainer key={`${lat}-${lon}`} center={position} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            Weather location. <br /> Lat: {lat}, Lon: {lon}
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapDisplay;
