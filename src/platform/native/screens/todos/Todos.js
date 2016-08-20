/* eslint-disabl */

import React, { Component, PropTypes } from 'react';
import {
  Text,
  ScrollView,
  View,
  StyleSheet,
  Modal,
  ListView,
  ActivityIndicator,
  TouchableOpacity,
  TouchableHighlight,
  Switch,
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as todoActions from '../../../common/actions/todoCrud';


const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#F6F6F6',
  },
  thumb: {
    width: 64,
    height: 64,
  },
  text: {
    flex: 1,
  },
});


class ListScreen extends Component {
  static propTypes = {
    findAll: PropTypes.func,
    list: PropTypes.array,
    todoTogleIsDone: PropTypes.func,
  }
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      selectedTodo: {},
      loaded: false,
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
    };
  }

  componentDidMount() {
    this.props.findAll().then(() => this.setState({ loaded: true }));
  }

  componentWillReceiveProps(props) {
    this.setState({
      loaded: true,
      dataSource: this.state.dataSource.cloneWithRows(props.list.map(todo => todo)),
    });
  }

  onPressRow = (selectedTodo) => {
    this.setState({ modalVisible: true, selectedTodo });
  }

  renderRow = (rowData) => {
    return (
      <ScrollView style={styles.rowStyle}>
        <TouchableOpacity onPress={() => this.onPressRow(rowData)}>
          <Text style={styles.rowText}>{rowData.title}</Text>
        </TouchableOpacity>
        <Switch
          onValueChange={() => this.props.todoTogleIsDone(rowData)}
          style={{ marginBottom: 10 }}
          value={rowData.isDone}
        />
      </ScrollView>
    );
  }

  renderLoadingView() {
    return (
      <View style={styles.header}>
        <Text>Loading ...</Text>
        <View style={styles.container}>
          <ActivityIndicator
            animating={!this.state.loaded}
            style={[styles.activityIndicator, { height: 250 }]}
            size="large"
          />
        </View>
      </View>
    );
  }

  renderListView() {
    return (
      <View style={styles.container}>
        <ListView
          dataSource={this.state.dataSource}
          style={styles.listview}
          renderRow={this.renderRow}
        />
        <Modal
          animationType={"slide"}
          transparent={false}
          visible={this.state.modalVisible}
        >
          <View style={{ marginTop: 22 }}>
             <View>
           <Text>Hello World!</Text>

           <TouchableHighlight onPress={() => {
             this.setState({ modalVisible: false })
           }}>
             <Text>Hide Modal</Text>
           </TouchableHighlight>

         </View>
        </View>
        </Modal>
      </View>
    );
  }

  render() {
    return this.state.loaded ? this.renderListView() : this.renderLoadingView();
  }
}

export default connect(
  state => ({ list: state.todos.list }),
  dispatch => bindActionCreators(todoActions, dispatch)
)(ListScreen);
