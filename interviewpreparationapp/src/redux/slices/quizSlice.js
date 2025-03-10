import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "../../firebase/firebaseConfig"; // Import Firebase
import { collection, getDocs } from "firebase/firestore";

// Async thunk to fetch quiz questions from Firebase
export const fetchQuizQuestions = createAsyncThunk("quiz/fetchQuestions", async () => {
  const querySnapshot = await getDocs(collection(db, "quizQuestions"));
  return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
});

const quizSlice = createSlice({
  name: "quiz",
  initialState: {
    questions: [],
    currentIndex: 0,
    score: 0,
    loading: false,
    error: null,
  },
  reducers: {
    nextQuestion: (state) => {
      if (state.currentIndex < state.questions.length - 1) {
        state.currentIndex += 1;
      }
    },
    prevQuestion: (state) => {
      if (state.currentIndex > 0) {
        state.currentIndex -= 1;
      }
    },
    submitAnswer: (state, action) => {
      const { questionId, selectedOption } = action.payload;
      const question = state.questions.find(q => q.id === questionId);

      if (question && question.correctAnswer === selectedOption) {
        state.score += 1;
      }
    },
    resetQuiz: (state) => {
      state.currentIndex = 0;
      state.score = 0;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuizQuestions.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchQuizQuestions.fulfilled, (state, action) => {
        state.loading = false;
        state.questions = action.payload;
      })
      .addCase(fetchQuizQuestions.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { nextQuestion, prevQuestion, submitAnswer, resetQuiz } = quizSlice.actions;
export default quizSlice.reducer;
