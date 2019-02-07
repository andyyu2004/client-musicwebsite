import { ATTEMPT_SIGN_IN_ERROR, REGISTRATION_ERROR, REGISTRATION_SUCCESS } from "../actions/constants";

const initialState = {
  loginMessage: "",
  registrationMessage: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case REGISTRATION_SUCCESS: {
      const { message } = action.payload;
      return {
        ...state,
        registrationMessage: message,
      }
    }
    case ATTEMPT_SIGN_IN_ERROR: {
      const { message } = action.payload;
      return {
        ...state,
        loginMessage: message,
      }       
    }
    case REGISTRATION_ERROR: {
      const { message } = action.payload;
      return {
        ...state,
        registrationMessage: message,
      }
    }
    default:
      return state;
  }
}


