import { createStore } from 'redux';
import rootReducer from './reducers/RootReducer';

const configureStore = () => {
  return createStore(rootReducer);
}

export default configureStore;