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
import TodoForm from '../../components/todoForm/TodoForm';

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
  scrollView: {
    backgroundColor: '#6A85B1',
    height: 300,
  },
});


class ListScreen extends Component {
  static propTypes = {
    findAll: PropTypes.func,
    list: PropTypes.array,
    todoTogleIsDone: PropTypes.func,
    findOne: PropTypes.func,
    updateTodo: PropTypes.func,
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
    this.props.findOne(selectedTodo.id).then(() => this.setState({ modalVisible: true, selectedTodo }));
  }

  renderRow = (rowData) => {
    const getTextStyle = () => {
      return StyleSheet({
        flex: 1,
        textDecoration: rowData.isDone ? 'line-through' : 'none',
      });
    };
    return (
      <View style={styles.row}>
        <TouchableOpacity onPress={() => this.onPressRow(rowData)}>
          <Text style={getTextStyle()}>{rowData.title}</Text>
        </TouchableOpacity>
        <Switch
          onValueChange={() => this.props.todoTogleIsDone(rowData)}
          style={{ marginBottom: 10 }}
          value={rowData.isDone}
        />
      </View>
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
        <ScrollView
          automaticallyAdjustContentInsets={false}
          onScroll={() => { console.log('onScroll!'); }}
          scrollEventThrottle={200}
          style={styles.scrollView}
        >
          <ListView
            dataSource={this.state.dataSource}
            style={styles.listview}
            renderRow={this.renderRow}
          />
        </ScrollView>
        <Modal
          animationType={"slide"}
          transparent={false}
          visible={this.state.modalVisible}
        >
          <View style={{ marginTop: 22 }}>
            <View>
              <TouchableHighlight
                onPress={() => {
                  this.setState({ modalVisible: false });
                }}
              >
                <Text>Hide Modal</Text>
              </TouchableHighlight>
              <TodoForm onSubmit={this.props.updateTodo} />
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
