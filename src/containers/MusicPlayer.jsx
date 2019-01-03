import React from 'react';
//import ReactAudioPlayer from 'react-audio-player';
//import Sound from 'react-sound';
//import AudioPlayer from 'react-h5-audio-player';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import '../css/MusicPlayer.css';

const MusicPlayer = ({ artist, album, track, url }) => (
  <div className="MusicPlayer">
    <audio 
      className="player"
      src={url}
      autoPlay
      controls
    />
    {url ? <p className="description">Now Playing: {artist}/{album} - {track}</p> : <p className="description">Nothing</p>}
    <p className="description">url: {url}</p>
  </div>
)

const mapStateToProps = state => {
  const { artist, album, track, genre, url } = state.music.tracks.currTrack;
  return {
    artist,
    album,
    track,
    genre,
    url,
  };
};

MusicPlayer.propTypes = {
  url: PropTypes.string,

}

export default connect(mapStateToProps)(MusicPlayer);