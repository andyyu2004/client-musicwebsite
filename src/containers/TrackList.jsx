import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { SET_CURR_TRACK, DELETE_TRACK } from '../actions/constants';
import '../css/TrackList.scss';


const TrackList = ({ items, setTrackUrl, deleteTrack }) => (
  <p className="trackListContainer"> {items && items.map((t, i) => 
    <Fragment key={i}>
      <button className="deleteButton" onClick={()=>deleteTrack(t.encoding, t.trackid)}>X</button>
      <button className="trackButton" onClick={()=>setTrackUrl(t.encoding, t.trackid, t.title, t.album, t.artist, t.genre)}>
        {t.title} <em>({t.album} - {t.artist}) {t.encoding}</em>
      </button><br/>
    </Fragment>)}
  </p>
);

const mapDispatchToProps = dispatch => ({
  setTrackUrl: (encoding, trackid, track, album, artist, genre) => dispatch({ 
    type: SET_CURR_TRACK, 
    payload: { 
      track,
      album,
      artist,
      genre,
      url: `/api/protected/music/tracks/${encoding}/${trackid}?jwt_token=${sessionStorage.getItem('jwtToken')}`,
    } 
  }),
  deleteTrack: (encoding, trackid) => dispatch({
    type: DELETE_TRACK,
    payload: {
      url: `/api/protected/music/tracks/${encoding}/${trackid}?jwt_token=${sessionStorage.getItem('jwtToken')}`
    }
  }),
});

export default connect(null, mapDispatchToProps)(TrackList);