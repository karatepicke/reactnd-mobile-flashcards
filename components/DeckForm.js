import React from 'react';
import { connect } from 'react-redux';

// UUID package
import { v4 } from 'uuid';

// UI
import { View, TextInput, Text, Alert, StyleSheet } from 'react-native';
import { Container, Form, Button } from 'native-base';

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
        'Achtung',
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
      this.setState({ title: '', category: '' })
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
          <Form>
            <View style={styles.inputWrapper}>
              <TextInput
                onChangeText={title => this.setState({ title })}
                value={this.state.title}
                fieldLabel='Deck-Title'
                placeholder='I.e. "My nifty biology-deck"'
                maxLength={50}
                style={styles.textInput}
              />
              <TextInput
                onChangeText={category => this.setState({ category })}
                value={this.state.category}
                fieldLabel='Deck-Category'
                placeholder='I.e. "Biology"'
                maxLength={50}
                style={styles.textInput}
              />
            </View>
            <View style={styles.buttonWrapper}>
              <Button
                style={styles.addDeckButton}
                onPress={this.handleButtonPress.bind(this)}>
                <Text style={styles.addDeckButtonText}>Add Deck</Text>
              </Button>
            </View>
          </Form>
        </Container>
      </View>
    )
  }
}

export default connect()(DeckForm);

const styles = StyleSheet.create({
  inputWrapper: {
    // marginBottom: 10,
  },
  textInput: {
    height: 30,
    paddingLeft: 10,
    marginBottom: 10,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  buttonWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  addDeckButton: {
    marginTop: 85,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
    width: 200,
    backgroundColor: '#33c479',
    textTransform: 'uppercase',
  },
  addDeckButtonText: {
    textTransform: 'uppercase',
  },
});

