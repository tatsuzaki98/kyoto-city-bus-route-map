import React from 'react';
import {MapContainer, TileLayer} from 'react-leaflet';


const View: React.FC = () => (
  <div className='h-screen'>
    <MapContainer className='flex-1' center={[35, 135]} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://maps.gsi.go.jp/development/ichiran.html">地理院地図</a> contributors'
        url="https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png"
      />
    </MapContainer>
  </div>
);


export default View;
