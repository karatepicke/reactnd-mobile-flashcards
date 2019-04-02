import React from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';

// Actions
import { _getInitialDeckData } from '../data/_DATA';

// UI
import { Alert, FlatList, View, Text } from 'react-native';

// Custom Components
import WelcomeText from '../components/WelcomeText';

class HomeView extends React.Component {
  state = {
    loaded: false,
  }

  render() {
    console.log('>>>>>>>>>>>', state, '<<<<<<<<<<<')

    const decksPanels = this.props.decks.decks.map((deck) => {
      return (
        <View>
          <Card>
            <Text>{deck.title}</Text>
          </Card>
        </View>
      )
    })
  }
}

const mapStateToProps = state => {
  return {
    decks: state.decks,
  }
};
export default connect(mapStateToProps)(HomeView);
