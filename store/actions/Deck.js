export const ADD_NEW_DECK = 'ADD_NEW_DECK'

export function addNewDeck(payload) {
  return {
    type: ADD_NEW_DECK,
    payload
  }
}
