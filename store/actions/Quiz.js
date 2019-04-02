export const CORRECT_ANSWER = 'CORRECT_ANSWER';
export const INCORRECT_ANSWER = 'INCORRECT_ANSWER';
export const MANAGE_QUIZ_END_INC_SCORE = 'MANAGE_QUIZ_END_INC_SCORE';
export const MANAGE_QUIZ_END_DEC_SCORE = 'MANAGE_QUIZ_END_DEC_SCORE';
export const RESET_QUIZ = 'RESET_QUIZ';
export const TOGGLE_ANSWER = 'TOGGLE_ANSWER';

export function handleCorrectAnswer() {
  return {
    type: CORRECT_ANSWER,
  }
}

export function handleIncorrectAnswer() {
  return {
    type: INCORRECT_ANSWER,
  }
}

export function manageQuizEndIncrementScore() {
  return {
    type: MANAGE_QUIZ_END_INC_SCORE,
  }
}

export function manageQuizEndDecrementScore() {
  return {
    type: MANAGE_QUIZ_END_DEC_SCORE,
  }
}

export function resetQuiz() {
  return {
    type: RESET_QUIZ,
  }
}

export function toggleAnswer() {
  return {
    type: TOGGLE_ANSWER,
  }
}
