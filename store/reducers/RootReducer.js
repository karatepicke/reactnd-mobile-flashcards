import { combineReducers } from 'redux';
import deckReducer from './DeckReducer';
import quizReducer from './QuizReducer';

export default function rootReducer() {
  combineReducers({
    deckReducer,
    quizReducer,
  });
}
