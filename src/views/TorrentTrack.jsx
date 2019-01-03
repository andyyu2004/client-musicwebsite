import React, { useState } from 'react';
import { connect } from 'react-redux';
import { DOWNLOAD_TORRENT, SET_CURR_TRACK_TORRENT } from '../actions/constants';
import '../css/TrackList.scss';

const TorrentTrack = ({ setTrackUrl }) => {
  
  const [ magnetURI, setMagnetURI ] = useState(null);
  const [ fileName, setFileName ] = useState(null);

  const submitTrack = e => {
    e.preventDefault();
    let newMagnetURI = magnetURI;
    if(magnetURI.substring(0, 8) === 'magnet:?') {
      newMagnetURI = magnetURI.substring(8);
    }
    setTrackUrl(newMagnetURI, fileName); // Server call

    //props.downloadTorrent(magnetURI, trackName) // Client side
  }

  return (
    <>
      <form onSubmit={submitTrack}>
        <input type="text" placeholder="Magnet URI" onChange={e => setMagnetURI(e.target.value)} />
        <input type="text" placeholder="Filename" onChange={e => setFileName(e.target.value)} />
        <input type="submit" value="Submit" />
      </form>
      <p>magnet:?xt=urn:btih:2a08fc5401b9d93edb90ea469360dcd7ca899a57&dn=Radiohead+OK+Computer+OKNOTOK+1997+2017+2CD+320&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Fzer0day.ch%3A1337&tr=udp%3A%2F%2Fopen.demonii.com%3A1337&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Fexodus.desync.com%3A6969</p>
    </>
  );
};


const mapDispatchToProps = dispatch => ({
  setTrackUrl: (magnetURI, trackName) => dispatch({ 
    type: SET_CURR_TRACK_TORRENT, 
    payload: { 
      url: `/api/music/torrent-tracks/${magnetURI}/${trackName}`,
    } 
  }),
  downloadTorrent: (magnetURI, trackName) => dispatch({
    type: DOWNLOAD_TORRENT,
    payload: {
      magnetURI,
      trackName,
    },
  }),
});



export default connect(null, mapDispatchToProps)(TorrentTrack);