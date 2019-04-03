// import { AsyncStorage } from 'react-native';

let deckData = {
  Animals: {
    title: 'Kakapo',
    quizLength: 2,
    questions: [
      {
        question: 'Why is the New Zealand "Kakapo" close to extinction?',
        answer: 'Because it shows no natural flight response and relies solely on its green feathers to camouflage it. Unfortunately that does not help against predators that track its prey by scent.',
      },
      {
        question: 'Can we help?',
        answer: 'Absolutely. For example by donating to the New Zealand Kakapo Recovery Found.',
      }
    ]
  }
}

export function _getInitialDeckData() {
  return new Promise((res, rej) => {
    res({ ...deckData })
  })
};


///

// import { AsyncStorage } from 'react-native'
// import {FLASHCARD_STORAGE_KEY, setDummyData} from "./_decks";

// export function fetchDecks(){
//   return AsyncStorage.getItem(FLASHCARD_STORAGE_KEY)
//     .then((decks) => {
//       if (decks === null)
//         setDummyData()
//           .then((response) => {
//             fetchDecks();
//           })
//           .catch(() => {
//             console.log('error');
//           });
//       else {
//         return JSON.parse(decks);
//       }
//     });
// }

// export function saveQuestion ({ deckTitle, question, answer }) {
//   return AsyncStorage.getItem(FLASHCARD_STORAGE_KEY)
//     .then((result) => {
//       // getting the decks first in order to update the specific deck
//       const decks = JSON.parse(result);
//       let updatedQuestions =  decks[deckTitle].questions;
//       updatedQuestions.push({
//         question: question,
//         answer: answer
//       })
//       const updatedDeck = JSON.stringify({
//         [deckTitle]:{
//           title: deckTitle,
//           questions: updatedQuestions
//         }
//       });
//       return AsyncStorage.mergeItem(FLASHCARD_STORAGE_KEY, updatedDeck)
//         .then( (response) => {
//           console.log('success on updating the questions')
//         })
//         .catch(() => {
//           console.log('error on updating the questions')
//         });
//     })
//     .catch((error) => {
//         console.error('error on getting decks');
//         console.dir(error)
//     })
// }

// export function saveDeck (title) {
//   return AsyncStorage.mergeItem(FLASHCARD_STORAGE_KEY,JSON.stringify(
//     {[title]: {
//               title: title,
//               questions: []
//             }
//     }))
//     .catch(() => {
//       console.log('Error on Saving a new deck')
//     });
// }

// export function removeEntry (key) {
//   return AsyncStorage.getItem()
//     .then((results) => {
//       const data = JSON.parse(results);
//       data[key] = undefined;
//       delete data[key];
//       AsyncStorage.setItem(FLASHCARD_STORAGE_KEY, JSON.stringify(data))
//     })
// }
