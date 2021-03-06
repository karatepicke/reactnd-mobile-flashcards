import React from 'react';
import { connect } from 'react-redux';

// UI
import { View, Text, StyleSheet } from 'react-native';
import { Card, Button, Badge, Container } from 'native-base';
import { Icon } from 'expo';
import { clearLocalNotification, setLocalNotification } from '../utils/helpers';

class QuizView extends React.Component {
  state = {
    deckId: undefined,
    deck: undefined,
    quizzes: [],
    quizIndex: 0,
    displayAnswer: false,
    currentScore: 0,
    quizOver: false
  }

  // Event Handlers
  handleButtonPress(answer) {
    const deckId = this.state.deckId
    const currentDeck = this.props.decks.find((deck) => deck.id === deckId)
    const currentCard = this.props.decks.find((deck) => deck.id === deckId).cards[this.state.quizIndex]

    this.setState({ displayAnswer: true })

    // Handle correct / incorrect answer
    if (answer === 'correct' && currentCard.isCorrect === true) {
      this.setState({ currentScore: this.state.currentScore + 1 })
    }

    if (answer === 'incorrect' && currentCard.isCorrect === false) {
      this.setState({ currentScore: this.state.currentScore + 1 })
    }

    // Handle Quiz is over
    if (this.state.quizIndex + 1 === currentDeck.cards.length) {
      this.setState({ quizOver: true })
    }
  }

  handleNextButtonPress() {
    // Handle quizIndex update
    this.setState({ quizIndex: this.state.quizIndex + 1, displayAnswer: false })
  }

  handleHomeButtonPress() {
    clearLocalNotification()
      .then(setLocalNotification)
    this.props.navigation.navigate('Home')
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

  cardQuestion(card, index) {
    return (
      <Card style={styles.deckCard}>
        <Badge style={styles.countBlob}>
          <Text>Card {this.state.quizIndex + 1}</Text>
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
    )
  }

  cardAnswer(card, index) {
    return (
      <Card style={styles.deckCard}>
        <Badge style={styles.countBlob}>
          <Text>Card {this.state.quizIndex + 1}</Text>
        </Badge>
        <View style={styles.questionWrapper}>
          <Text style={styles.question}>A: {card.answer}</Text>
        </View>
        <View style={styles.buttonWrap}>
          {this.renderAnswerButton()}
        </View>
      </Card>
    )
  }

  renderAnswerButton() {
    if (this.state.quizOver) {
      return (
        <Button
          onPress={this.handleHomeButtonPress.bind(this)}
          style={styles.nextButton}>
          <Text style={styles.nextButtonText}>
            Home
            <Icon.Entypo
              name='home'
              size={18}
              style={styles.homeIcon}
            />
          </Text>
        </Button>
      )
    }
    return (
      <Button
        onPress={this.handleNextButtonPress.bind(this)}
        style={styles.nextButton}>
        <Text style={styles.nextButtonText}>
          Next Card
          <Icon.Entypo
            name='controller-next'
            size={18}
            style={styles.nextIcon}
          />
        </Text>
      </Button>
    )
  }

  render() {
    const deckId = this.props.navigation.getParam('deckId')
    const currentCard = this.props.decks.find((deck) => deck.id === deckId).cards[this.state.quizIndex]

    if (!this.state.deckId || !this.state.deck) {
      return null
    }

    return (
      <View>
        {this.state.displayAnswer ? this.cardAnswer(currentCard) : this.cardQuestion(currentCard)}
        <View style={styles.pointsWrapper}>
          <Text style={styles.title}>{this.state.quizOver ? 'You scored:' : 'Your current score:'}</Text>
          <Text style={styles.pointsCount}>
            {this.state.quizOver ? `${this.state.currentScore} / ${this.state.deck.cards.length} Points` : `${this.state.currentScore} Points`}
          </Text>
          <Text style={styles.quizResultEmoji}>{this.state.quizOver ? '🎉' : ''}</Text>
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
    marginLeft: 8,
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
    marginLeft: 8,
    color: 'white',
  },
  nextButton: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    width: 150,
    backgroundColor: 'blue',
  },
  nextButtonText: {
    textTransform: 'uppercase',
    color: 'white',
  },
  nextIcon: {
    marginLeft: 8,
    color: 'white',
  },
  homeIcon: {
    marginLeft: 8,
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
    marginBottom: 20,
    textAlign: 'center',
    fontSize: 20,
  },
  quizResultEmoji: {
    textAlign: 'center',
    fontSize: 80,
  }
});
