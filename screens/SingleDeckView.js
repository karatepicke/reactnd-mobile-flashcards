import React from 'react';
import { connect } from 'react-redux';

// Actions
import { destroyDeck } from '../store/actions/Deck';

// UI
import { View, Text, StyleSheet } from 'react-native';
import { Button, Card } from 'native-base';
import { Icon } from 'expo';

class SingleDeckView extends React.Component {
  state = {
    deckId: undefined,
    deck: undefined
  }

  componentWillMount() {
    const deckId = this.props.navigation.getParam('deckId')
    const deck = this.props.decks.find((deck) => deck.id === deckId)

    this.setState({ deckId, deck })
  }

  // Event Listeners
  handleAddCardPress() {
    this.props.navigation.navigate('AddNewCard', { deckId: this.state.deckId })
  }

  handleDeleteDeckPress() {
    // Destroy selected deck by deckId
    this.props.dispatch(destroyDeck(this.state.deckId))

    // Navigate back to HomeView
    this.props.navigation.navigate('Home')
  }

  handleStartQuizPress() {
    this.props.navigation.navigate('Quiz', { deckId: this.state.deckId })
  }

  render() {
    if (!this.state.deckId || !this.state.deck) {
      return null
    }
    return (
      <View>
        <Card style={styles.deckCard}>
          <Text style={styles.deckTitle}>Deck: {this.state.deck.title}</Text>
          <Text style={styles.deckInfo}>{this.state.deck.cards.length} Cards in this deck.</Text>
          <View style={styles.buttonWrap}>
            <Button
              style={styles.addCardButton}
              onPress={this.handleAddCardPress.bind(this)}>
              <Text style={styles.addCardButtonText}>Add card</Text>
            </Button>
            <Button
              style={styles.startQuizButton}
              onPress={this.handleStartQuizPress.bind(this)}>
              <Text style={styles.startQuizButtonText}>Start Quiz</Text>
            </Button>
          </View>
          <View style={styles.deleteButtonWrapper}>
            <Icon.Entypo
              onPress={this.handleDeleteDeckPress.bind(this)}
              name='circle-with-cross'
              size={45}
              style={styles.deleteButton}
            />
          </View>
        </Card>
      </View>
    )
  }
}

const mapStateToProps = ({ decks }) => ({
  decks: decks.decks
})
export default connect(mapStateToProps)(SingleDeckView);

const styles = StyleSheet.create({
  deckCard: {
    height: 200,
    padding: 15,
    backgroundColor: '#dee2e8',
  },
  deckTitle: {
    fontSize: 20,
    marginBottom: 10,
  },
  deckInfo: {
    marginBottom: 20,
  },
  buttonWrap: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  addCardButton: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
    minWidth: 100,
    backgroundColor: '#33c479',
    textTransform: 'uppercase',
  },
  addCardButtonText: {
    textTransform: 'uppercase',
  },
  startQuizButton: {
    display: 'flex',
    padding: 10,
    minWidth: 100,
    backgroundColor: '#db8325',
    textTransform: 'uppercase',
  },
  startQuizButtonText: {
    textTransform: 'uppercase',
  },
  deleteButtonWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  deleteButton: {
    color: '#c43333',
  },
});
