import store from '../store';
import { SKIP_TO_NEXT, SKIP_TO_PREV, TOGGLE_PLAYBACK_STATE } from '../actions/constants';


const keyBindings = {
  playNext: ["ctrl+right", "right"],
  playPrev: ["ctrl+left", "left"],
  playPause: "space",
};

const handlers = {
  playPrev: e => store.dispatch({ type: SKIP_TO_PREV }),
  playNext: e => store.dispatch({ type: SKIP_TO_NEXT }),
  playPause: e => store.dispatch({ type: TOGGLE_PLAYBACK_STATE }),
};



export { 
  keyBindings,
  handlers,
};