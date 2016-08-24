import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import rootReducer from '../reducers';


const createStoreWithMiddleware = applyMiddleware(createLogger())(createStore);

const configureStore = (initialState) => {
  return createStoreWithMiddleware(
    rootReducer,
    initialState,
    typeof window === 'object' && typeof window.devToolsExtension !== 'undefined'
      ? window.devToolsExtension()
      : undefined
   );
};

export default configureStore;
