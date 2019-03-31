import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import { FontAwesome } from '@expo/vector-icons';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Decks',
  tabBarIcon: ({ focused }) => (
    <FontAwesome 
      focused={focused}
      size={28}
      name={
        `${focused ? 'vcard' : 'vcard-o'}`
        }
      />
  ),
};

// const LinksStack = createStackNavigator({
//   Links: LinksScreen,
// });

// LinksStack.navigationOptions = {
//   tabBarLabel: 'Links',
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon
//       focused={focused}
//       name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
//     />
//   ),
// };

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Add Decks',
  tabBarIcon: ({ focused }) => (
    <FontAwesome
      focused={focused}
      size={28}
      name={
        `${focused ? 'plus-circle' : 'plus'}`
      }
    />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  // LinksStack,
  SettingsStack,
});
