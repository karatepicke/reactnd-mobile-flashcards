import { combineReducers } from 'redux';
import decksReducer from './DeckReducer';
import quizzesReducer from './QuizReducer';

export default function rootReducer() {
  combineReducers({
    decks: decksReducer,
    quizzes: quizzesReducer,
  });
} 
