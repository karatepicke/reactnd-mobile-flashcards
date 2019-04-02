export const GET_ALL_DECKS = 'GET_ALL_DECKS'
export const ADD_NEW_CARD = 'ADD_NEW_CARD'
export const ADD_NEW_DECK = 'ADD_NEW_DECK'

export function getDecks(payload) {
  return {
    type: GET_ALL_DECKS,
    payload: {
      decks
    }
  }
}

export function addNewCard(payload) {
  return {
    type: ADD_NEW_CARD,
    payload: {
      decks
    }
  }
}

export function addNewDeck(payload) {
  return {
    type: ADD_NEW_DECK,
    payload
  }
}
