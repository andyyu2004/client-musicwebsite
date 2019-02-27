import { FETCH_ARTISTS, FETCH_ARTISTS_ASYNC, FETCH_ALBUMS_BY_ARTIST_ID_ASYNC } from "../actions/constants";

const initialState = {
  all: [],
}

export default (state = initialState, action) => {
  switch(action.type) {
    case FETCH_ARTISTS_ASYNC: {
      const { artists } = action.payload;
      return {
        ...state,
        all: artists,
      };
    }
    case FETCH_ALBUMS_BY_ARTIST_ID_ASYNC: {
      const { album, artistid } = action.payload;
      return {
        ...state,
        [artistid]: album,
      };
    }
    default:
      return state;
  }
}