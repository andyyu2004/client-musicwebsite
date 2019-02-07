import { REGISTRATION_SUCCESS } from "../actions/constants";

const initialState = {
  registrationSuccess: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case REGISTRATION_SUCCESS:
    const { message } = action.payload;
      return {
        ...state,
        registrationSuccess: message,
      }
    default:
      return state;
  }
}