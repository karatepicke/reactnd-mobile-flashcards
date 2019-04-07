import React from 'react';
import AppNavigator from './navigation/AppNavigator';

// Store
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

// UI
import { View } from 'react-native';

// Helpers
import { setLocalNotification } from './utils/helpers';


const store = configureStore();

class App extends React.Component {
  componentDidMount() {
    setLocalNotification()
  }

  render() {
    return(
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <AppNavigator />
        </View>
      </Provider>
    )
  }
}

export default App;
