export const START_QUIZ = "START_QUIZ";
export const FETCH_QUESTIONS_SUCCESS = "FETCH_QUESTIONS_SUCCESS";
export const FETCH_QUESTIONS_ERROR = "FETCH_QUESTIONS_ERROR";

export const startQuiz = () => ({
  type: START_QUIZ,
});

export const fetchQuestions = () => async (dispatch) => {
  try {
    const response = await fetch("https://opentdb.com/api.php?amount=10&type=multiple");
    const data = await response.json();
    
    dispatch({
      type: FETCH_QUESTIONS_SUCCESS,
      payload: data.results, // Make sure you're using `results`
    });
  } catch (error) {
    dispatch({
      type: FETCH_QUESTIONS_ERROR,
      payload: error.message,
    });
  }
};
