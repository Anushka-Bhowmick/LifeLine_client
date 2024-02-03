import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const MapContainer = ({ address }) => {
  const mapStyles = {
    height: '400px',
    width: '100%',
  };

  const defaultCenter = {
    lat: 0,
    lng: 0,
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyCMbwrpQlsB5bPSjj5G_TWtTXtK3R8dJD8">
      <GoogleMap mapContainerStyle={mapStyles} zoom={10} center={defaultCenter}>
        {address && <Marker position={{ lat: address.latitude, lng: address.longitude }} />}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapContainer;
