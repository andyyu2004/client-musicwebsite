import { SIGN_IN_USER, SYNC_STORE_WITH_SESSION } from "../actions/constants";


const initalState = {
  user: null,
  token: null,
}

export default (state = initalState, action) => {
  switch (action.type) {
    case SIGN_IN_USER: {
      const { user, token } = action.payload;
      return {
        ...state,
        user,
        token,
      };
    }

    case SYNC_STORE_WITH_SESSION: {
      return {
        ...state,
        user: sessionStorage.getItem('currUser'),
        token: sessionStorage.getItem('jwtToken'),
      };
    }

    default:
      return state;
  }
}