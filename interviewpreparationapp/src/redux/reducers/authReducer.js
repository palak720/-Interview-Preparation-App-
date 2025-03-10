const initialState = {
    user: null,
    error: null,
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case "LOGIN_SUCCESS":
      case "REGISTER_SUCCESS":
        return { ...state, user: action.payload, error: null };
      case "LOGIN_FAILURE":
      case "REGISTER_FAILURE":
        return { ...state, error: action.payload };
      case "LOGOUT":
        return { ...state, user: null };
      default:
        return state;
    }
  };
  
  export default authReducer;
  