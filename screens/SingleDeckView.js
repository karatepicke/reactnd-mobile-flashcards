import React from 'react';
import { connect } from 'react-redux';

// Actions
import { destroyDeck } from '../store/actions/Deck';

// UI
import { View, Text } from 'react-native';
import { Button } from 'native-base';
import { Icon } from 'expo';

class SingleDeckView extends React.Component {
  // Event Listeners
  handleAddCardPress(deckId) {
    this.props.navigation.navigate('AddNewCard', { deckId })
  }

  handleDeleteDeckPress(deckId) {
    // Destroy selected deck by deckId
    this.props.dispatch(destroyDeck(deckId))

    // Navigate back to HomeView
    this.props.navigation.navigate('Home')
  }

  render() {
    const deckId = this.props.navigation.getParam('deckId')

    return (
      <View>
        <Text>Deck {deckId}</Text>
        <Text>Placeholder</Text>
        <Icon.Entypo
          onPress={this.handleDeleteDeckPress.bind(this, deckId)}
          name='circle-with-cross'
          size={26}
          style={{ marginBottom: -3 }}
        // color={this.props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
        />
        <Button
          onPress={this.handleAddCardPress.bind(this, deckId)}>
          <Text>Add a card</Text>
        </Button>
        <Button><Text>Start Quiz</Text></Button >
      </View>
    )
  }
}

export default connect()(SingleDeckView);
