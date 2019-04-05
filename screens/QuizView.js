import React from 'react';
import { connect } from 'react-redux';

// UI
import { View, Text } from 'react-native';
import { Card, Button } from 'native-base';

class QuizView extends React.Component {
  state = {
    deckId: undefined,
    deck: undefined,
    quizzes: [],
    quizIndex: 0
  }

  // Event Handlers
  handleButtonPress(answer) {
    // Handle correct / Incorrect
    // do sth with answer

    // Handle quizIndex update
    this.setState({ quizIndex: this.state.quizIndex + 1 })
  }

  componentWillMount() {
    const deckId = this.props.navigation.getParam('deckId')
    const deck = this.props.decks.find((deck) => deck.id === deckId)

    const quizzes = deck.cards.map((card, index) => {
      return (
        <View key={index}>
          <Card>
            <Text>{card.question}</Text>
            <Button
              onPress={this.handleButtonPress.bind(this, 'correct')}>
              <Text>Correct</Text>
            </Button>
            <Button
              onPress={this.handleButtonPress.bind(this, 'incorrect')}>
              <Text>Incorrect</Text>
            </Button>
          </Card>
        </View>
      )
    })
    this.setState({ deckId, deck, quizzes })
  }

  render() {
    if (!this.state.deckId || !this.state.deck) {
      return null
    }

    return this.state.quizzes[this.state.quizIndex]
  }
}

const mapStateToProps = ({ decks }) => ({
  decks: decks.decks
})
export default connect(mapStateToProps)(QuizView);
