import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { SET_CURR_TRACK } from '../actions/constants';
import '../css/TrackList.scss';


const TrackList = ({ items, setTrackUrl }) => (
  <p className="trackListContainer"> {items && items.map((t, i) => <Fragment key={i}>
    <button className="trackButton" onClick={()=>setTrackUrl(t.encoding, t.trackid, t.title, t.album, t.artist, t.genre)}>
      {t.title} <em>({t.album} - {t.artist})</em>
    </button><br/></Fragment>)}
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
});

export default connect(null, mapDispatchToProps)(TrackList);