/*const initialState = {
    bookmarks: [],
  };
  
  const bookmarkReducer = (state = initialState, action) => {
    switch (action.type) {
      case "ADD_BOOKMARK":
        return { ...state, bookmarks: [...state.bookmarks, action.payload] };
      case "REMOVE_BOOKMARK":
        return { ...state, bookmarks: state.bookmarks.filter((b) => b.id !== action.payload) };
      default:
        return state;
    }
  };
  
  export default bookmarkReducer;*/
  


  import { createSlice } from "@reduxjs/toolkit";

const bookmarkSlice = createSlice({
  name: "bookmark",
  initialState: {
    bookmarkedQuestions: [],
  },
  reducers: {
    addBookmark: (state, action) => {
      state.bookmarkedQuestions.push(action.payload);
    },
    removeBookmark: (state, action) => {
      state.bookmarkedQuestions = state.bookmarkedQuestions.filter(
        (question) => question !== action.payload
      );
    },
  },
});

export const { addBookmark, removeBookmark } = bookmarkSlice.actions;
export default bookmarkSlice.reducer;
