import React from 'react';
import { connect } from 'react-redux';

// UI
import { View, TextInput, Button, Alert } from 'react-native';

// Actions
import { addNewDeck } from '../store/actions/Deck';

class DeckForm extends React.Component {
  state = {
    title: ''
  }

  // Event handlers
  handleButtonPress(payload) {
    if (this.state.title.length === 0) {
      console.log('ALERT')
    } else {
      const { title } = this.state

      this.props.addNewDeck(payload)
      // this.props.navigate('QuizOverview', { title })
    }
  } 

  render() {
    return(
      <View>
        <TextInput
          onChangeText={title => this.setState({title})}
          fieldLabel='Deck-Title'
          placeholder='I.e. "My nifty biology-deck"'
          maxLength={50}
        />
        <Button title='Submit title' onPress={() => this.handleButtonPress(this.state)} />
      </View>
    )
  }
  
}

const mapStateToProps = ({ Deck }) => ({
  addNewDeck: Deck.addNewDeck,
})
export default connect(null, { addNewDeck })(DeckForm);