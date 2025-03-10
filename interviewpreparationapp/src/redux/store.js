
/*import { createStore, combineReducers, applyMiddleware } from "redux";
import  thunk from "redux-thunk";
import authReducer from "../redux/reducers/authReducer";
import bookmarkReducer from "../redux/reducers/bookmarkReducer";
//import rootReducer from "./reducers"

const rootReducer = combineReducers({
  auth: authReducer,
  bookmark: bookmarkReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk.default));
export default store;*/


import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/authReducer";
import bookmarkReducer from "./reducers/bookmarkReducer";
import quizReducer from "./reducers/quizReducer";

const store = configureStore({
  reducer: {
    auth: authReducer,
    bookmark: bookmarkReducer,
    quiz:quizReducer,
  },
});

export default store;
