import React, { Component, PropTypes } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 10,
    marginTop: 10,
    fontWeight: '500',
  },
  button: {
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 10,
    marginTop: 10,
    color: 'blue',
  },
});

export default class SideMenu extends Component {
  static propTypes = {
    navigator: PropTypes.object,
  }

  onReplaceTab2Press() {
    this.props.navigator.toggleDrawer({
      to: 'closed',
      side: 'left',
      animated: true,
    });
    // push/pop navigator actions affect the navigation stack of the current screen only.
    // since side menu actions are normally directed at sibling tabs, push/pop will
    // not help us. the recommended alternative is to use deep links for this purpose
    this.props.navigator.handleDeepLink({
      link: 'tab2'
    });
  }

  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>

        <Text style={styles.title}>Side Menu</Text>

        <TouchableOpacity onPress={ this.onReplaceTab2Press.bind(this) }>
          <Text style={styles.button}>Replace Tab#2 Root</Text>
        </TouchableOpacity>

      </View>
    );
  }
  // onModalPress() {
  //   this.props.navigator.showModal({
  //     title: "Modal",
  //     screen: "example.ModalScreen"
  //   });
  // }
}
