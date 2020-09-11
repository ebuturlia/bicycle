import React from 'react';
import {StyleSheet} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {stationWithBikes} from '../../utilz/mapStations';
import MapMarker from '../../components/mapMarker';

const region = {
  latitude: 37.78825,
  longitude: -122.4324,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
};
export default class MapScreen extends React.PureComponent {
  render() {
    return (
      <MapView
        style={{...StyleSheet.absoluteFillObject}}
        provider={PROVIDER_GOOGLE}
        region={region}>
        {stationWithBikes.map((station, index) => {
          return (
            <MapMarker
              key={String(index)}
              station={station}
              navigation={this.props.navigation}
            />
          );
        })}
      </MapView>
    );
  }
}
