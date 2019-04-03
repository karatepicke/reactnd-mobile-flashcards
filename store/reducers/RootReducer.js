import { combineReducers } from 'redux';
import decksReducer from './DeckReducer';
import quizzesReducer from './QuizReducer';

const rootReducer = combineReducers({
  decks: decksReducer,
  quizzes: quizzesReducer,
});

export default rootReducer;
