import React from 'react';
import { WebBrowser } from 'expo';

// UI
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Card } from 'native-base';

// Custom Components
import DeckForm from '../components/DeckForm';


export default class AddDecksScreen extends React.Component {
  render() {
    return ( 
      <View>
        <Card style={styles.deckCard}>
          <Text style={styles.title}>New Deck</Text>
          <View>
            <Text style={styles.subtitleOne}>What is the name of your new deck?</Text>
            <Text style={styles.subtitleTwo}>Create a new deck and keep on learning... 💡</Text>
            <DeckForm {...this.props} />
          </View>
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  deckCard: {
    minHeight: 250,
    padding: 15,
    backgroundColor: '#dee2e8',
  },
  title: {
    marginBottom: 10,
    textAlign: 'center',
    // textDecoration: 'underline',
    fontSize: 20,
  },
  subtitleOne: {
    textAlign: 'center',
    fontSize: 16,
  },
  subtitleTwo: {
    textAlign: 'center',
    fontSize: 16,
    marginBottom: 10,
  },
});
