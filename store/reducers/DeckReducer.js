import { GET_ALL_DECKS, ADD_NEW_CARD, ADD_NEW_DECK } from '../actions/Deck';

const initialState = {
  decks: {
    Animals: {
      title: 'The Kakapo',
      quizLength: 2,
      questions: [
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
    Sports: {
      title: "Germany's Football Record National Champion",
      quizLength: 1,
      questions: [
        {
          question: "Which professional team holds the record for most national title-wins in Germany's Bundesliga?",
          answer: 'Bayern München - Bayer Munich',
        }
      ]
    }
  }
}

export default function decksReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_DECKS:
      return {
        ...state,
        ...action.decks,
      };
    case ADD_NEW_CARD:
      return {
        ...state,
        [action.payload.title]: {
          title: state[action.payload.title].title,
          quizLength: state[action.payload.title].quizLength + 1,
          questions: [
            ...state[action.payload.title].questions,
            {
              question: action.payload.question,
              answer: action.payload.answer,
            },
          ],
        },
      };
    case ADD_NEW_DECK:
      return {
        ...state,
        [action.payload.title]: {
          ...action.payload,
          quizLength: 0,
          questions: [],
        },
      };
    default:
      return state;
  }
};
