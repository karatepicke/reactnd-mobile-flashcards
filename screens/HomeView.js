import React from 'react';
import { connect } from 'react-redux';

// Navigation

// Actions
import { _getInitialDeckData } from '../data/_DATA';

// UI
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
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
            <Card style={styles.deckCard}>
              <Text style={styles.categoryText}>From the category "{deck.category}"</Text>
              <Text style={styles.deckTitle}>{deck.title}</Text>
              <Text>{deck.cards.length > 1 ? `${deck.cards.length} Cards` : '1 Card'}</Text>
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

const styles = StyleSheet.create({
  deckCard: {
    height: 200,
    padding: 15,
    backgroundColor: '#dee2e8',
  },
  categoryText: {
    fontStyle: 'italic',
    marginBottom: 8,
  },
  deckTitle: {
    fontSize: 20,
    marginBottom: 10,
  }
});
