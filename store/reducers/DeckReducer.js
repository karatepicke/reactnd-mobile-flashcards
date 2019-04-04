// UUID
import { v4 } from 'uuid';

import { GET_ALL_DECKS, ADD_NEW_CARD, ADD_NEW_DECK } from '../actions/Deck';

const initialState = {
  decks: [
    {
      id: v4(),
      title: 'The Kakapo',
      category: 'Animal Kingdom 🦍',
      cards: [
        {
          question: 'Why is the New Zealand "Kakapo" close to extinction?',
          answer: 'Because it shows no natural flight response and relies solely on its green feathers to camouflage it. Unfortunately that does not help against predators that track its prey by scent.',
        },
        {
          question: 'Can we help?',
          answer: 'Absolutely. For example by donating to the New Zealand Kakapo Recovery Fund.',
        }
      ]
    },
    {
      id: v4(),
      title: "Germany's Football Record National Champion",
      category: 'Sports ⚽',
      cards: [
        {
          question: "Which professional team holds the record for most national title-wins in Germany's Bundesliga?",
          answer: 'Bayern München - Bayer Munich',
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
    default:
      return state;
  }
};
