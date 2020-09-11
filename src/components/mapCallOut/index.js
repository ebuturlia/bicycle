import React from 'react';
import {View, Text, Platform, TouchableOpacity} from 'react-native';
import {Callout, CalloutSubview} from 'react-native-maps';

const isIOS = Platform.OS === 'ios';

const MapCallOut = (props) => {
  const {station, navigation} = props;

  const Button = isIOS ? CalloutSubview : TouchableOpacity;
  return (
    <Callout
      onPress={() => {
        navigation.navigate('StationsDetails', {
          stationID: station.asset_id,
        });
      }}
      tooltip>
      <View
        style={{
          borderColor: 'grey',
          borderWidth: 2,
          borderRadius: 3,
        }}>
        <Text>Total: {station.totalNumberOfBicycles}</Text>
        <Text>Available: {station.availableNumberOfBicycles}</Text>
        <Button
          onPress={() => {
            navigation.navigate('StationsDetails', {
              stationID: station.asset_id,
            });
          }}
          style={{backgroundColor: '#C3E1FF', borderRadius: 3, height: 20}}>
          <Text>DETAILS</Text>
        </Button>
      </View>
    </Callout>
  );
};

export default MapCallOut;
