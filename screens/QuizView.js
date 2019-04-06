import React from 'react';
import { connect } from 'react-redux';

// UI
import { View, Text, StyleSheet } from 'react-native';
import { Card, Button, Badge, Container } from 'native-base';
import { Icon } from 'expo';

class QuizView extends React.Component {
  state = {
    deckId: undefined,
    deck: undefined,
    quizzes: [],
    quizIndex: 0,
    currentScore: 0
  }

  // Event Handlers
  handleButtonPress(answer) {
    // Handle correct / incorrect answer
    if (answer === 'correct' && this.state.quizzes[this.state.quizIndex].isCorrect === true) {
      this.setState({ currentScore: this.state.currentScore + 1 })
    }

    // Handle quizIndex update
    this.setState({ quizIndex: this.state.quizIndex + 1 })
  }

  componentWillMount() {
    const deckId = this.props.navigation.getParam('deckId')
    const deck = this.props.decks.find((deck) => deck.id === deckId)

    const quizzes = deck.cards.map((card, index) => {
      return (
        <View key={index}>
          <Card style={styles.deckCard}>
            <Badge style={styles.countBlob}>
              <Text>Card {index + 1}</Text>
            </Badge>
            <View style={styles.questionWrapper}>
              <Text style={styles.question}>Q: {card.question}</Text>
            </View>
            <View style={styles.buttonWrap}>
              <Button
                onPress={this.handleButtonPress.bind(this, 'correct')}
                style={styles.correctButton}>
                <Text style={styles.correctButtonText}>
                  Correct
                  <Icon.Entypo
                    name='check'
                    size={18}
                    style={styles.correctIcon}
                  />
                  </Text>
              </Button>
              <Button
                onPress={this.handleButtonPress.bind(this, 'incorrect')}
                style={styles.incorrectButton}>
                <Text style={styles.incorrectButtonText}>
                  Incorrect
                  <Icon.Entypo
                    name='cross'
                    size={18}
                    style={styles.incorrectIcon}
                  />
                </Text>
              </Button>
            </View>
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

    return (
      <View>
        {this.state.quizzes[this.state.quizIndex]}
        <View style={styles.pointsWrapper}>
            <Text style={styles.title}>Your current score:</Text>
            <Text style={styles.pointsCount}>{this.state.currentScore} Points</Text>
        </View>
      </View>
    )
  }
}

const mapStateToProps = ({ decks }) => ({
  decks: decks.decks
})
export default connect(mapStateToProps)(QuizView);

const styles = StyleSheet.create({
  deckCard: {
    height: 230,
    padding: 15,
    backgroundColor: '#dee2e8',
  },
  countBlob: {
    backgroundColor: '#db8325',
    marginBottom: 10,
  },
  questionWrapper: {
    height: 100,
  },
  question: {
    marginBottom: 50,
    textAlign: 'center',
    fontSize: 18,
  },
  buttonWrap: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  correctButton: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
    minWidth: 100,
    backgroundColor: '#33c479',
    textTransform: 'uppercase',
  },
  correctButtonText: {
    textTransform: 'uppercase',
  },
  correctIcon: {
    marginLeft: 6,
  },
  incorrectButton: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    display: 'flex',
    padding: 10,
    minWidth: 100,
    backgroundColor: '#c43333',
    textTransform: 'uppercase',
  },
  incorrectButtonText: {
    textTransform: 'uppercase',
    color: 'white',
  },
  incorrectIcon: {
    marginLeft: 6,
    color: 'white',
  },
  pointsWrapper: {
    marginTop: 15,
  },
  title: {
    textAlign: 'center',
    marginBottom: 10,
    fontSize: 22,
    fontStyle: 'italic',
  },
  pointsCount: {
    textAlign: 'center',
    fontSize: 20,
  }
});
