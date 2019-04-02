import React from 'react';
import AppNavigator from './navigation/AppNavigator';

// Store
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

// UI
import { View } from 'react-native';

const store = configureStore();

const App = () => (
  <Provider store={ store }>
    {console.log('>>>>>>>>>>', store, '<<<<<<<<<<<')}
    <View style={{ flex: 1 }}>
      <AppNavigator />
    </View>
  </Provider>
);

export default App;