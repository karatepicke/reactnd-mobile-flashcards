import React from 'react';

import { View, Text } from 'react-native';

class SingleDeckView extends React.Component {
  render() {
    console.log(this.props)
    return (
      <View>
        <Text>Single Deck</Text>
        <Text>{this.props.navigation.getParam('deckId')}</Text>
      </View>
    )
  }
}

export default SingleDeckView;
