import React from 'react';

import { View, Text } from 'react-native';
import { Button } from 'native-base';

class SingleDeckView extends React.Component {
  // Event Listeners
  handleAddCardPress(deckId) {
    this.props.navigation.navigate('AddNewCard', { deckId })
  }

  render() {
    const deckId = this.props.navigation.getParam('deckId')

    return (
      <View>
        <Text>Deck {deckId}</Text>
        <Text>Placeholder</Text>
        <Button onPress={this.handleAddCardPress.bind(this, deckId)}><Text>Add a card</Text></Button>
        <Button><Text>Start Quiz</Text></Button >
      </View >
    )
  }
}

export default SingleDeckView;
