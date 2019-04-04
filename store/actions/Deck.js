export const GET_ALL_DECKS = 'GET_ALL_DECKS'
export const ADD_NEW_CARD = 'ADD_NEW_CARD'
export const ADD_NEW_DECK = 'ADD_NEW_DECK'
export const DESTROY_DECK = 'DESTROY_DECK'

export function getDecks() {
  return {
    type: GET_ALL_DECKS,
  }
}

export function addNewCard(deckId, card) {
  return {
    type: ADD_NEW_CARD,
    payload: {
      deckId,
      card
    }
  }
}

export function addNewDeck(deck) {
  return {
    type: ADD_NEW_DECK,
    payload: {
      deck
    }
  }
}

export function destroyDeck(deckId) {
  return {
    type: DESTROY_DECK,
    payload: {
      deckId
    }
  }
}
