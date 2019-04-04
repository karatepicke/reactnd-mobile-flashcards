import React from 'react';
import { FontAwesome } from '@expo/vector-icons';

// Navigation
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

// Views
import AddDecksScreen from '../screens/AddDecksScreen';
import HomeView from '../screens/HomeView';
import SingleDeckView from '../screens/SingleDeckView';
import AddNewCardView from '../screens/AddNewCardView';

const NavStack = createStackNavigator({
  Home: {
    screen: HomeView
  },
  SingleDeck: {
    screen: SingleDeckView
  },
  AddNewCard: {
    screen: AddNewCardView
  }
});

NavStack.navigationOptions = {
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
  NavStack,
  DecksStack,
});
