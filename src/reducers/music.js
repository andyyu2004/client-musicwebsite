import { FETCH_TRACKS_ASYNC, SET_CURR_TRACK, SET_CURR_TRACK_TORRENT_ASYNC, LOGOUT_RESET_AUTH } from '../actions/constants';

const initialState = {
  albums: {
    all: []
  },
  tracks: {
    all: [],
  },
};

export default (state = initialState, action) => {
  switch(action.type) {
    case FETCH_TRACKS_ASYNC:
      return {
        ...state,
        tracks: {
          ...state.tracks,
          all: action.payload.tracks
        },
      };

    case SET_CURR_TRACK_TORRENT_ASYNC: {
      const { filename, url } = action.payload;
      return {
        ...state,
        tracks: {
          ...state.tracks,
          currTrack: {
            ...state.tracks.currTrack,
            url,
            track: filename,
          },
        },
      };
    }

    case LOGOUT_RESET_AUTH: {
      return initialState;
    }

    default:
      return state;
  }
} 