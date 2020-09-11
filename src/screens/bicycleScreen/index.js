import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {stationWithBikes} from '../../utilz/mapStations';

export default class BicycleScreen extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      station: null,
    };
  }

  componentDidMount() {
    const station = stationWithBikes.find(
      (bikeStation) =>
        bikeStation.asset_id === this.props.route.params.stationID,
    );
    this.setState({station: station});
  }

  render() {
    return (
      <View>
        <FlatList
          data={this.state.station ? this.state.station.bicycles : []}
          renderItem={({item, index}) => (
            <View
              style={{
                backgroundColor: '#DDFAE7',
                marginTop: 30,
                borderRadius: 3,
              }}>
              <Text>
                status': {item.available ? 'available' : 'notAvailable'}
              </Text>
              <Text>model: {item.model}</Text>
              <Text>battery: {item.battery}%</Text>
            </View>
          )}
        />
      </View>
    );
  }
}
