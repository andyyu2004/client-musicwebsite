import React, { useRef, useState, useEffect } from 'react';
import { HotKeys } from 'react-hotkeys';
import playIcon from '../images/play_icon.png';
import pauseIcon from '../images/pause_icon.png';
import prevIcon from '../images/prev_icon.png';
import nextIcon from '../images/next_icon.png';
import repeatIcon from '../images/repeat_icon.png';
import repeatOneIcon from '../images/repeat_one_icon.png';
import shuffleIcon from '../images/shuffle_icon.png';
import '../css/Audio.css';

const Audio = ({ src, onPrev, onNext, changePlaybackStateNotification }) => {

  const audio = useRef({});
  const maxProgress = 1000;
  const [progress, setProgress] = useState(0);
  const maxVolume = 40;
  const [volume, setVolume] = useState(1);
  const [repeatState, setRepeatState] = useState(false);

  useEffect(() => {
    handlePlayPause();
  }, [changePlaybackStateNotification]);

  const [duration, setDuration] = useState(0); 

  const handlePlayPause = e => {
    const player = audio.current;
    player.paused ? player.play() : player.pause();
  };

  const handlePlayPrev = e => {
    const player = audio.current;
    player.currentTime > 2 ? player.currentTime = 0 : onPrev()
  };

  const updateProgressBar = () => {
    const player = audio.current;
    const duration = isNaN(player.duration) ? 1 : player.duration; // Prevent NaNs and /0s
    const progress = player.currentTime / duration;
    setProgress(progress);
    setDuration(duration);
  };
  setInterval(updateProgressBar, 200);

  const seek = e => {
    const player = audio.current;
    player.currentTime = player.duration * e.target.value / maxProgress;
  };

  const updateVolume = e => {
    // Volume is in 0.025
    const player = audio.current;
    const newVolume = e.target.value / maxVolume;
    player.volume = newVolume;
    setVolume(newVolume);
  };

  const toggleRepeat = e => {
    const player = audio.current;
    player.loop = !repeatState;
    setRepeatState(!repeatState);
  };
  
  const keyHandlers = {
    // nextTrack: () => onNext(),
  };   

  return (
    <HotKeys handlers={{ playPause: e => { handlePlayPause(); console.log("Hi") } }}>
      <div className="Audio">
        <audio
          ref={audio} 
          src={src}
          autoPlay
          loop={repeatState}
          onEnded={onNext}
        />
        <div className="controlsContainer">
          <img className="icon" onClick={toggleRepeat} src={repeatState ? repeatOneIcon : repeatIcon} alt="Repeat" />
          <img className="icon" onClick={handlePlayPrev} src={prevIcon} alt="Prev" />
          <img className="icon" onClick={handlePlayPause} alt="Play/Pause" src={audio.current.paused ? playIcon : pauseIcon} />
          <img className="icon" onClick={onNext} src={nextIcon} alt="Next" />
          <img className="icon" alt="Shuffle" src={shuffleIcon} />
        </div>      
        <div className="playbackSliderContainer">
          <span className="timeText">{secondsToMinutes(progress * duration)}</span>
          <input className="playbackSlider" onChange={seek} type="range" min={0} max={maxProgress} value={progress * maxProgress} />
          <span className="timeText">{secondsToMinutes((1 - progress) * duration)}</span>
        </div>
        <div className="volumeSliderContainer">
          <input className="volumeSlider" onChange={updateVolume} type="range" min={0} max={maxVolume} value={volume * maxVolume} />
        </div>
      </div>
    </HotKeys>
  );
};


const secondsToMinutes = s => {
  const minutes = Math.floor(s / 60);
  const seconds = Math.floor(s) % 60;
  return `${minutes}:${seconds.toLocaleString('en-US', { minimumIntegerDigits: 2 })}`;
};

export default Audio;