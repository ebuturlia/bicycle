import React from 'react';
import {Marker} from 'react-native-maps';

import MapCallOut from '../mapCallOut';

const MapMarker = (props) => {
  const {station, navigation} = props;
  return (
    <Marker
      coordinate={{
        latitude: +station.latitude,
        longitude: +station.longitude,
      }}
      title={station.the_geom.coordinates.title}
      description={station.the_geom.map_label}>
      <MapCallOut station={station} navigation={navigation} />
    </Marker>
  );
};

export default MapMarker;
