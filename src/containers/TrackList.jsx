import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { SET_CURR_TRACK } from '../actions/constants';
import '../css/TrackList.scss';


const TrackList = ({ items, setTrackUrl }) => (
  <p className="trackListContainer"> {items && items.map((t, i) => <Fragment key={i}>
    <button className="trackButton" onClick={()=>setTrackUrl(t.encoding, t.trackid, t.title, t.albumname, t.artistname, t.genre)}>
      {t.title} <em>({t.albumname} - {t.artistname})</em>
  </button><br/></Fragment>)}
  </p>
)

const mapDispatchToProps = dispatch => ({
  setTrackUrl: (encoding, trackid, track, album, artist, genre) => dispatch({ 
    type: SET_CURR_TRACK, 
    payload: { 
      track,
      album,
      artist,
      genre,
      url: `/api/music/tracks/${encoding}/${trackid}`,
    } 
  }),
});

export default connect(null, mapDispatchToProps)(TrackList);