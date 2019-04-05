import React from 'react';
import { connect } from 'react-redux';

// Actions
import { addNewCard } from '../store/actions/Deck';

// UI
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Card, Form, Button, Icon, Picker } from 'native-base';

class AddNewCardView extends React.Component {
  state = {
    question: '',
    answer: '',
    isCorrect: false
  }

  // Event Listeners
  handleButtonPress() {
    // Add Card to Deck
    const deckId = this.props.navigation.getParam('deckId')

    this.props.dispatch(addNewCard(deckId, {
      question: this.state.question,
      answer: this.state.answer,
      isCorrect: this.state.isCorrect
    }))

    // Redirect to SingleDeckView
    this.props.navigation.navigate('SingleDeck', { deckId })
  }

  render() {
    return (
      <View>
        <Card style={styles.deckCard}>
          <Text style={styles.title}>New Card</Text>
          <Text style={styles.questionInstruction}>Please enter question and answer:</Text>
          <Form>
            <TextInput
              onChangeText={question => this.setState({ question })}
              fieldLabel='Question'
              placeholder='I.e. "Is the Eiffel Tower more than 200 meters high?"'
              maxLength={50}
              style={styles.textInput}
            />
            <TextInput
              onChangeText={answer => this.setState({ answer })}
              fieldLabel='Answer'
              placeholder='I.e. "Yes, it is in fact 300 meters high."'
              maxLength={50}
              style={styles.textInput}
            />
            <Text style={styles.pickerInstruction}>Please select wether your given answer is correct or incorrect:</Text>
            <Picker
              mode="dropdown"
              iosIcon={<Icon name="arrow-down" />}
              placeholder="Please select value"
              placeholderStyle={{ color: "#bfc6ea" }}
              placeholderIconColor="#007aff"
              style={styles.pickerInput}
              selectedValue={this.state.isCorrect}
              onValueChange={(itemValue) =>
                this.setState({ isCorrect: itemValue })}>
              <Picker.Item label="Correct" value={true} />
              <Picker.Item label="Incorrect" value={false} />
            </Picker>
            <View style={styles.buttonWrapper}>
              <Button 
                style={styles.addCardButton}
                onPress={this.handleButtonPress.bind(this)}>
                <Text style={styles.addCardButtonText}>Submit Card</Text>
              </Button>
            </View>
          </Form>
        </Card>
      </View>
    )
  }
}

export default connect()(AddNewCardView);

const styles = StyleSheet.create({
  deckCard: {
    minHeight: 200,
    padding: 15,
    backgroundColor: '#dee2e8',
  },
  title: {
    marginBottom: 10,
    textAlign: 'center',
    // textDecoration: 'underline',
    fontSize: 20,
  },
  textInput: {
    marginBottom: 10,
    padding: 8,
    backgroundColor: 'white',
    borderRadius: 5,
    fontSize: 15,
  },
  pickerInput: {
    marginBottom: 18,
    width: 'auto',
    backgroundColor: 'white',
  },
  questionInstruction: {
    marginBottom: 8,
    fontStyle: 'italic',
  },
  pickerInstruction: {
    marginBottom: 8,
    fontStyle: 'italic',
  },
  buttonWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  addCardButton: {
    width: 200,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    borderColor: '#33c479',
    padding: 10,
    minWidth: 100,
    backgroundColor: '#33c479',
  },
  addCardButtonText: {
    textTransform: 'uppercase',
  },
});
