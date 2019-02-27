import { ADD_TO_QUEUE, SKIP_TO_NEXT, SET_CURR_TRACK, SET_QUEUE_INDEX, SKIP_TO_PREV, PLAY_NEXT, SHUFFLE_ALL, TOGGLE_PLAYBACK_STATE } from "../actions/constants";
import shuffleArray from '../utility/shuffleArray';

const initialState = {
  queue: [],
  index: 0,
  // This is just some bogus value to we change to notify audio to toggle playbackState
  // This value is used as useEffects second parameter to do so
  playPauseNotification: false, 
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_PLAYBACK_STATE: {
      const newState = !state.playPauseNotification;
      return {
        ...state,
        playPauseNotification: !state.playPauseNotification,
      };
    }

    case PLAY_NEXT: {
      const newQueue = [...state.queue];
      newQueue.splice(state.index + 1, 0, action.payload.track);
      return {
        ...state,
        queue: newQueue,
      };    
    }

    case ADD_TO_QUEUE: {
      const newQueue = [...state.queue];
      newQueue.push(action.payload.track);
      return {
        ...state,
        queue: newQueue,
      }
    }

    case SET_CURR_TRACK: {
      const { track } = action.payload;
      const { queue, index } = state;
      const newQueue = [...queue];
      newQueue[index] = track;
      return {
        ...state,
        queue: newQueue,
      }
    }

    case SET_QUEUE_INDEX: {
      const { index } = action.payload;
      return {
        ...state,
        index,
      }
    }

    case SKIP_TO_PREV: {
      const { index } = state;
      const newIndex = index > 0 ? index - 1 : 0;
      return {
        ...state,
        index: newIndex
      };
    }

    case SKIP_TO_NEXT: {
      const { index, queue } = state;
      const newIndex = index + 1 < queue.length ? index + 1 : index; // Prevents out of bounds access
      return {
        ...state,
        index: newIndex,
      };
    }

    case SHUFFLE_ALL: {
      const { tracks } = action.payload;
      // Make copy as it is in-place shuffle
      const newQueue = [...tracks];
      shuffleArray(newQueue);
      return {
        ...state,
        queue: newQueue,
      };
    }

    default:
      return state;
  }

}