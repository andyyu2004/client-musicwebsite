import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { SET_QUEUE_INDEX } from '../actions/constants';
import "../css/QueueList.scss"

const QueueList = ({ queue, index, setIndex }) => (
  <div className="QueueListContainer">
    <h5>Queue</h5>
    <p className="trackListContainer"> {queue.map((t, i) => 
      <Fragment key={i} >
        <button className="trackButton" onClick={() => setIndex(i)}>
          {i+1}. {t.title} <em>({t.album} - {t.artist}) {t.encoding} {i===index && "<--"}</em>
        </button><br/>
      </Fragment> )}
    </p>
  </div>
);

const mapStateToProps = state => {
  const { index, queue } = state.playback;
  return {
    queue,
    index,
  };
};

const mapDispatchToProps = dispatch => ({
  setIndex: index => dispatch({
    type: SET_QUEUE_INDEX,
    payload: { index }
  }),
});

export default connect(mapStateToProps, mapDispatchToProps)(QueueList);