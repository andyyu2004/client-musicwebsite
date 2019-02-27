import { FETCH_ALBUMS_ASYNC, FETCH_TRACKS_BY_ALBUM_ID_ASYNC } from "../actions/constants";

const initialState = {
  all: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALBUMS_ASYNC: {
      const { albums } = action.payload;
      return {
        ...state,
        all: albums,
      };
    }

    case FETCH_TRACKS_BY_ALBUM_ID_ASYNC: {
      const { tracks, albumid } = action.payload;
      return {
        ...state,
        [albumid]: tracks
      };
    }

    default:
      return state;
  }
};