import React, { useRef } from 'react';
//import ReactAudioPlayer from 'react-audio-player';
//import Sound from 'react-sound';
//import AudioPlayer from 'react-h5-audio-player';
import { connect } from 'react-redux';
import { SKIP_TO_NEXT, SKIP_TO_PREV } from '../actions/constants';
import { Audio, AudioClass } from '../components';
import '../css/MusicPlayer.css';

const MusicPlayer = ({ t, queue, index, skipToPrev, skipToNext, playPauseNotification }) => {
  if (!queue.length) return null;
  // const audio = useRef({});
  const currTrack = queue[index];
  const url = `/api/protected/music/tracks/${currTrack.encoding}/${currTrack.trackid}?jwt_token=${sessionStorage.getItem('jwtToken')}`;
  return (
    <div className="MusicPlayer"> 
      <span className="title"><b>{currTrack.title}</b></span>
      <span className="albumArtistText">{currTrack.artist} - {currTrack.album}</span>
      <Audio src={url} onPrev={skipToPrev} onNext={skipToNext} changePlaybackStateNotification={playPauseNotification} />
    </div>
  );
}

const mapStateToProps = state => {
  const { currTrack } = state.music.tracks;
  const { queue, index, playPauseNotification } = state.playback;
  return {
    playPauseNotification,
    queue, 
    index,
    t: currTrack
  };
};

const mapDispatchToProps = dispatch => ({
  skipToPrev: () => dispatch({
    type: SKIP_TO_PREV
  }),
  skipToNext: () => dispatch({
    type: SKIP_TO_NEXT
  }),
});

export default connect(mapStateToProps, mapDispatchToProps)(MusicPlayer);