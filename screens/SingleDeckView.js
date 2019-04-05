import React from 'react';
import { connect } from 'react-redux';

// Actions
import { destroyDeck } from '../store/actions/Deck';

// UI
import { View, Text } from 'react-native';
import { Button } from 'native-base';
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
        <Text>Deck {this.state.deck.title}</Text>
        <Text>Placeholder</Text>
        <Icon.Entypo
          onPress={this.handleDeleteDeckPress.bind(this)}
          name='circle-with-cross'
          size={26}
          style={{ marginBottom: -3 }}
        />
        <Button
          onPress={this.handleAddCardPress.bind(this)}>
          <Text>Add a card</Text>
        </Button>
        <Button
          onPress={this.handleStartQuizPress.bind(this)}>
          <Text>Start Quiz</Text>
        </Button>
      </View>
    )
  }
}

const mapStateToProps = ({ decks }) => ({
  decks: decks.decks
})
export default connect(mapStateToProps)(SingleDeckView);
