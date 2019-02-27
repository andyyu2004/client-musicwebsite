import React from 'react';
import { connect } from 'react-redux';
import '../css/ContextMenu.scss';
import { ADD_TO_QUEUE, PLAY_NEXT } from '../actions/constants';

const ContextMenu = ({ x, y, t, addToQueue, playNext }) => { // t is track obj
  return (
    <div className="ContextMenu" style={{ position: "absolute", left: x, top: y }}>
      <p>{t.artist} - {t.title}</p>
      <button onClick={()=>playNext(t)}>PlayNext</button>
      <button onClick={()=>addToQueue(t)}>Add To Queue</button>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  playNext: track => dispatch({
    type: PLAY_NEXT,
    payload: { track }
  }),
  addToQueue: track => dispatch({
     type: ADD_TO_QUEUE,
     payload: { track }
   })
});

export default connect(null, mapDispatchToProps)(ContextMenu);