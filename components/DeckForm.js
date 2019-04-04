import React from 'react';
import { connect } from 'react-redux';

// UUID package
import { v4 } from 'uuid';

// UI
import { View, TextInput, Text, Alert } from 'react-native';
import { Container, Card, Form, Button } from 'native-base';

// Actions
import { addNewDeck } from '../store/actions/Deck';

class DeckForm extends React.Component {
  state = {
    title: '',
    category: ''
  }

  // Event handlers
  handleButtonPress() {
    if (!this.state.title || !this.state.category) {
      Alert.alert(
        'ALARM',
        this.getAlertMsg(),
        [
          { text: 'OK', onPress: () => console.log('OK Pressed') },
        ],
        { cancelable: false },
      );
    } else {
      this.props.dispatch(addNewDeck({
        id: v4(),
        title: this.state.title,
        category: this.state.category,
        cards: []
      }))
      this.props.navigation.navigate('Home')
    }
  }

  getAlertMsg() {
    if (!this.state.title && this.state.category) {
      return 'Please provide a title.'
    }

    if (!this.state.category && this.state.title) {
      return 'Please provide a category.'
    }

    return 'Please provide a title and category.'
  }

  render() {
    return (
      <View>
        <Container>
          <Card>
            <Form>
              <TextInput
                onChangeText={title => this.setState({ title })}
                fieldLabel='Deck-Title'
                placeholder='I.e. "My nifty biology-deck"'
                maxLength={50}
              />
              <TextInput
                onChangeText={category => this.setState({ category })}
                fieldLabel='Deck-Category'
                placeholder='I.e. "Biology"'
                maxLength={50}
              />
              <Button onPress={() => this.handleButtonPress()}>
                <Text>Submit Title</Text>
              </Button>
            </Form>
          </Card>
        </Container>
      </View>
    )
  }
}

export default connect()(DeckForm);
