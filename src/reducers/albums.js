import { FETCH_ALBUMS_ASYNC } from "../actions/constants";

const initialState = {
  all: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    
    case FETCH_ALBUMS_ASYNC: {
      const { albums } = action.payload;
      return {
        ...state,
        all: albums,
      }
    }

    default:
      return state;
  }
};