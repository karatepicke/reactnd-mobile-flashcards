import React from 'react';

// UI
import { View, Text } from 'react-native';

class WelcomeText extends React.Component {
  render() {
    return(
      <View>
        <Text>Welcome to Mobile Flashcards!</Text>
        <Text>What do you want to learn today?</Text>
      </View>
    )
  }
}

export default WelcomeText;
