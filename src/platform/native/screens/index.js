import { Navigation } from 'react-native-navigation';

import Home from './home/Home';
import Todos from './todos/Todos';
import SideMenu from './sideMenu/SideMenu';
import Edit from './edit/Edit';

// register all screens of the app (including internal ones)
export function registerScreens(store, Provider) {
  Navigation.registerComponent('example.Todos', () => Todos, store, Provider);
  Navigation.registerComponent('example.Home', () => Home, store, Provider);
  Navigation.registerComponent('example.SideMenu', () => SideMenu, store, Provider);
  Navigation.registerComponent('example.Edit', () => Edit, store, Provider);
}
