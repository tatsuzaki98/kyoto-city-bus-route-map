import React from 'react';
import {Circle, MapContainer, MapContainerProps, Popup, TileLayer, ZoomControl} from 'react-leaflet';
import {Props} from './types';


const View: React.FC<Props> = (props: Props) => {
  const mapContainerProps: MapContainerProps = {
    center: [34.9861781, 135.7587768],
    zoom: 13,
  };

  const circleMarkerStyle = {
    radius: 50,
    fillOpacity: 0.5,
    weight: 1,
  };

  // const green = 'rgba(52,211,153,1)';
  const red = 'rgba(239,68,68,1)';

  return (
    <div className='h-screen'>
      <MapContainer className='flex-1' {...mapContainerProps} zoomControl={false}>
        <ZoomControl position='bottomleft'/>
        <TileLayer
          attribution='&copy; <a href="https://maps.gsi.go.jp/development/ichiran.html">地理院地図</a> contributors'
          url="https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png"
        />
        {Object.values(props.store.stops).map((each, id) => (
          <Circle
            key={id}
            {...circleMarkerStyle}
            color={red}
            fillColor={red}
            center={[each.geometry.coordinates[1], each.geometry.coordinates[0]]}
            eventHandlers={{mousedown: () => props.handlers.clickStop(each.properties.primaryKey)}}
          >
            <Popup>{each.properties.label}</Popup>
          </Circle>
        ))}
      </MapContainer>
    </div>
  );
};


export default View;
