import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import {MyStack} from './nav';

class App extends React.PureComponent {
  render() {
    return (
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    );
  }
}

export default App;
