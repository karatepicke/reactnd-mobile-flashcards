import React from 'react';
import { connect } from 'react-redux';

// UI
import { View, TextInput, Text, Alert } from 'react-native';
import { Container, Card, Form, Input, Button } from 'native-base';

// Actions
import { addNewDeck } from '../store/actions/Deck';

class DeckForm extends React.Component {
  componentWillUnmount() {
    this.isCancelled = true;
  }

  state = {
    title: ''
  }

  // Event handlers
  handleButtonPress(payload) {
    if (this.state.title.length === 0) {
      console.log('ALERT')
    } else {
      const title = this.state

      this.props.dispatch(addNewDeck(title))
      // this.props.navigate('QuizOverview', { title })
    }
  } 

  render() {
    return(
      <View>
        <Container>
          <Card>
            <Form>
              <TextInput
                onChangeText={title => !this.isCancelled && this.setState({title})}
                fieldLabel='Deck-Title'
                placeholder='I.e. "My nifty biology-deck"'
                maxLength={50}
              />
              <Button onPress={() => this.handleButtonPress(this.state)}>
                <Text>Submit Title</Text>
              </Button>
            </Form>
          </Card>
        </Container>
      </View>
    )
  }
}

const mapStateToProps = ({ Deck }) => ({
  addNewDeck: Deck.addNewDeck,
})
export default connect(null, { addNewDeck })(DeckForm);