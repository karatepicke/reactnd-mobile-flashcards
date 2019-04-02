import React from 'react';
import { Platform } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

// Navigation
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import TabBarIcon from '../components/TabBarIcon';

// Screens
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import AddDecksScreen from '../screens/AddDecksScreen';
import HomeView from '../screens/HomeView';

const HomeStack = createStackNavigator({
  Home: HomeView,
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

const DecksStack = createStackNavigator({
  AddDecks: AddDecksScreen,
});

DecksStack.navigationOptions = {
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
  DecksStack,
});
