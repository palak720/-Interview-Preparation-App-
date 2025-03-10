import { START_QUIZ, FETCH_QUESTIONS_SUCCESS, FETCH_QUESTIONS_ERROR } from "../actions/quizActions";

const initialState = {
  isStarted: false,
  questions: [],
  error: null,
  currentQuestionIndex: 0,
};

const quizReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_QUIZ:
      return { ...state, isStarted: true };

    case FETCH_QUESTIONS_SUCCESS:
      return { ...state, questions: action.payload };

    case FETCH_QUESTIONS_ERROR:
      return { ...state, error: action.payload };

    default:
      return state;
  }
};

export default quizReducer;
