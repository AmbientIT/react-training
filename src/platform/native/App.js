import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { Navigation } from 'react-native-navigation';
import thunk from 'redux-thunk';
import todos from '../common/reducers/todos';
import { registerScreens } from './screens';

// // redux related book keeping
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const reducer = combineReducers({ todos });
const store = createStoreWithMiddleware(reducer);

// screen related book keeping
registerScreens(store, Provider);

Navigation.startTabBasedApp({
  tabs: [
    {
      label: 'Home',
      screen: 'example.Home',
      icon: require('./img/home.png'),
      selectedIcon: require('./img/home-selected.png'),
      title: 'Home',
      overrideBackPress: true,
      navigatorStyle: {},
    },
    {
      label: 'List',
      screen: 'example.Todos',
      icon: require('./img/list.png'),
      selectedIcon: require('./img/list-selected.png'),
      title: 'Todo List',
      navigatorStyle: {},
    },
  ],
  animationType: 'slide-down',
  title: 'react todo list',
  drawer: { // optional, add this if you want a side menu drawer in your app
    left: { // optional, define if you want a drawer from the left
      screen: 'example.SideMenu', // unique ID registered with Navigation.registerScreen
    },
    disableOpenGesture: false, // optional, can the drawer be opened with a swipe instead of button
  },
});
