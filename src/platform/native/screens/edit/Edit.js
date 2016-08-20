import React, {Component} from 'react';
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

export default class ModalScreen extends Component {
  static navigatorButtons = {
    leftButtons: [{
      title: 'Close',
      id: 'close'
    }]
  };
  constructor(props) {
    super(props);
    // if you want to listen on navigator events, set this up
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }
  render() {
    return (
      <View style={{flex: 1, padding: 20}}>
        <Text>Modal</Text>
      </View>
    );
  }
  onNavigatorEvent(event) {
    if (event.id == 'close') {
      this.props.navigator.dismissModal();
    }
  }
  onPushPress() {
    this.props.navigator.push({
      title: "More",
      screen: "example.PushedScreen"
    });
  }
  onPushStyledPress() {
    this.props.navigator.push({
      title: "More",
      screen: "example.StyledScreen"
    });
  }
  onClosePress() {
    this.props.navigator.dismissModal();
  }
  onCloseAllPress() {
    this.props.navigator.dismissAllModals();
  }
}

const styles = StyleSheet.create({
  button: {
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 10,
    marginTop:10,
    color: 'blue'
  }
});
