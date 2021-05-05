import React from 'react';
import {Circle, MapContainer, MapContainerProps, TileLayer} from 'react-leaflet';
import {Props} from './types';


const View: React.FC<Props> = (props: Props) => {
  const mapContainerProps: MapContainerProps = {
    center: [34.9861781, 135.7587768],
    zoom: 13,
  };

  const circleMarkerStyle = {
    radius: 50,
    color: '#00AAAA',
    fillColor: '#00AAAA',
    fillOpacity: 0.5,
    weight: 1,
  };

  return (
    <div className='h-screen'>
      <MapContainer className='flex-1' {...mapContainerProps}>
        <TileLayer
          attribution='&copy; <a href="https://maps.gsi.go.jp/development/ichiran.html">地理院地図</a> contributors'
          url="https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png"
        />
        {props.store.stops.map((each, id) => (
          <Circle
            key={id}
            {...circleMarkerStyle}
            center={[each.geometry.coordinates[1], each.geometry.coordinates[0]]}
            eventHandlers={{click: () => console.log(each.properties.label)}}
          />
        ))}
      </MapContainer>
    </div>
  );
};


export default View;
