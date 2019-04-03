import React from 'react';
import { connect } from 'react-redux';

// Navigation
import { createStackNavigator } from 'react-navigation';

// Actions
import { _getInitialDeckData } from '../data/_DATA';

// UI
import { View, Text, TouchableOpacity } from 'react-native';
import { Card } from 'native-base';

class HomeView extends React.Component {
  state = {
    loaded: false,
  }

  // Event Listeners
  handleCardPress(deckId) {
    this.props.navigation.navigate('SingleDeck', { deckId })
  }

  render() {
    if (!this.props.decks) {
      return null
    }
    const decksPanels = this.props.decks.map((deck) => {
      return (
        <View key={deck.id}>
          <TouchableOpacity onPress={this.handleCardPress.bind(this, deck.id)}>
            <Card>
              <Text>{deck.title}</Text>
              <Text>{deck.questions.length} Questions</Text>
            </Card>
          </TouchableOpacity>
        </View>
      )
    })
    return decksPanels
  }
}

const mapStateToProps = ({ decks }) => ({
  decks: decks.decks,
});
export default connect(mapStateToProps)(HomeView);
