import React, { Component } from 'react';
import {
  Text,
} from 'react-native';

class Home extends Component {
  static navigatorButtons = {
    leftButtons: [{
      icon: require('../../img/menu.png'),
      id: 'menu',
    }],
    rightButtons: [],
  };
  render() {
    return (
      <Text>
        Home Page
      </Text>
    );
  }
}

export default Home;
