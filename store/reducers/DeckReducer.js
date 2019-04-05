// UUID
import { v4 } from 'uuid';

import {
  GET_ALL_DECKS,
  ADD_NEW_CARD,
  ADD_NEW_DECK,
  DESTROY_DECK
} from '../actions/Deck';

const initialState = {
  decks: [
    {
      id: v4(),
      title: 'The Kakapo',
      category: 'Animal Kingdom 🦍',
      cards: [
        {
          question: 'Is the New Zealand "Kakapo" close to extinction?',
          isCorrect: true,
          answer: 'Correct. Thats because it shows no natural flight response and relies solely on its green feathers to camouflage it. Unfortunately that does not help against predators that track its prey by scent.',
        },
        {
          question: 'Can we help?',
          isCorrect: true,
          answer: 'Correct. For example by donating to the New Zealand Kakapo Recovery Fund.',
        }
      ]
    },
    {
      id: v4(),
      title: 'Football',
      category: 'Sports ⚽',
      cards: [
        {
          question: "Is Bayern München Germany's Football Record Champion?",
          isCorrect: true,
          answer: 'Bayern München won the Bundesliga 27 times.',
        }
      ]
    }
  ]
}

export default function decksReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_DECKS:
      return {
        ...state,
        ...action.decks,
      };
    case ADD_NEW_CARD:
      const modifiedDecks = state.decks.map((deck) => {
        if (deck.id === action.payload.deckId) {
          return {
            ...deck,
            cards: [...deck.cards, action.payload.card]
          }
        }
        return deck
      })

      return {
        ...state,
        decks: modifiedDecks
      };
    case ADD_NEW_DECK:
      return {
        ...state,
        decks: [
          action.payload.deck,
          ...state.decks
        ]
      };
    case DESTROY_DECK:
      const filteredDecks = state.decks.filter(deck => deck.id !== action.payload.deckId);

      return {
        ...state,
        decks: [
          ...filteredDecks
        ]
      };
    default:
      return state;
  }
};
