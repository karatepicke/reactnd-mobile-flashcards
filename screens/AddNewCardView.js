import React from 'react';
import { connect } from 'react-redux';

// Actions
import { addNewCard } from '../store/actions/Deck';

// UI
import { View, Text, TextInput, Picker } from 'react-native';
import { Card, Form, Button } from 'native-base';

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
        <Card>
          <Form>
            <TextInput
              onChangeText={question => this.setState({ question })}
              fieldLabel='Question'
              placeholder='I.e. "How tall is the Eiffel Tower"'
              maxLength={50}
            />
            <TextInput
              onChangeText={answer => this.setState({ answer })}
              fieldLabel='Answer'
              placeholder='I.e. "300 meters"'
              maxLength={50}
            />
            <Picker
              selectedValue={this.state.isCorrect}
              onValueChange={(itemValue) =>
                this.setState({ isCorrect: itemValue })
              }>
              <Picker.Item label="Correct" value={true} />
              <Picker.Item label="Incorrect" value={false} />
            </Picker>
            <Button onPress={this.handleButtonPress.bind(this)}>
              <Text>Submit Card</Text>
            </Button>
          </Form>
        </Card>
      </View>
    )
  }
}

export default connect()(AddNewCardView);
