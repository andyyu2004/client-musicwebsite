// import React, { Component } from 'react';
// import { HotKeys } from 'react-hotkeys';
// import playIcon from '../images/play_icon.png';
// import pauseIcon from '../images/pause_icon.png';
// import prevIcon from '../images/prev_icon.png';
// import nextIcon from '../images/next_icon.png';
// import repeatIcon from '../images/repeat_icon.png';
// import repeatOneIcon from '../images/repeat_one_icon.png';
// import '../css/Audio.css';

// // const AudioClass = ({ src, onPrev, onNext }) => {
// // Class To Be Able To Get Ref
// class AudioClass extends Component {
  
//   constructor(props) {
//     super(props);
//     this.audio = React.createRef();
//     this.maxProgress = 1000;
//     this.maxVolume = 40;
//     this.tabIndex = 0;
//     this.state = {
//       progress: 0,
//       volume: 1,
//       repeatState: false,
//       duration: 0,
//       isPlaying: true,
//     };
//     // setInterval(this.updateProgressBar, 200);
//   }

//   handlePlayPause = e => {
//     const player = this.audio.current;
//     player.paused ? player.play() : player.pause();
//     this.setState({ isPlaying: !player.paused });
//   };

//   handlePlayPrev = e => {
//     const { onPrev } = this.props;
//     const player = this.audio.current;
//     player.currentTime > 2 ? player.currentTime = 0 : onPrev()
//   };

//   updateProgressBar = () => {
//     const player = this.audio.current;
//     console.log(this.audio);
//     const { setProgress, setDuration } = this;
//     const duration = isNaN(player.duration) ? 1 : player.duration; // Prevent NaNs and /0s
//     const progress = player.currentTime / duration;
//     setProgress(progress);
//     setDuration(duration);
//   };
  

//   seek = e => {
//     const player = this.audio.current;
//     player.currentTime = player.duration * e.target.value / this.maxProgress;
//   };

//   updateVolume = e => {
//     // Volume is in 0.025
//     const player = this.audio.current;
//     const newVolume = e.target.value / this.maxVolume;
//     player.volume = newVolume;
//     this.setVolume(newVolume);
//   };  

//   toggleRepeat = e => {
//     const player = this.audio.current;
//     player.loop = !this.repeatState;
//     this.setRepeatState(!this.repeatState);
//   };  

//   render() {
//     const { toggleRepeat, seek, maxProgress, maxVolume, updateVolume, handlePlayPause, handlePlayPrev } = this;
//     const { progress, duration, repeatState, volume, isPlaying } = this.state;
//     const { src, onNext } = this.props;
//     return (
//       <HotKeys handlers={{ playPause: e => handlePlayPause() }}>
//         <div className="Audio">
//           <audio
//             ref={this.audio}
//             src={src}
//             autoPlay
//           />
//           <div className="controlsContainer">
//             <img className="icon" onClick={toggleRepeat} src={repeatState ? repeatOneIcon : repeatIcon} alt="Repeat" />
//             <img className="icon" onClick={handlePlayPrev} src={prevIcon} alt="Prev" />
//             <img className="icon" onClick={handlePlayPause} alt="Play/Pause" src={isPlaying ? pauseIcon : playIcon} />
//             <img className="icon" onClick={onNext} src={nextIcon} alt="Next"/>
//           </div>
//         </div>
//       </HotKeys>
//     );
//   //   return (
//   //     <HotKeys handlers={{ playPause: e => handlePlayPause() }}>
//   //       <div className="Audio">
//   //         <audio
//   //           ref={this.audio} 
//   //           src={src}
//   //           autoPlay
//   //           loop={repeatState}
//   //           onEnded={onNext}
//   //         />
//           // <div className="controlsContainer">
//           //   <img className="icon" onClick={toggleRepeat} src={repeatState ? repeatOneIcon : repeatIcon} alt="Repeat" />
//           //   <img className="icon" onClick={handlePlayPrev} src={prevIcon} alt="Prev" />
//           //   <img className="icon" onClick={handlePlayPause} alt="Play/Pause" src={this.audio.current.paused ? playIcon : pauseIcon} />
//           //   <img className="icon" onClick={onNext} src={nextIcon} alt="Next"/>
//           // </div>      
//   //         <div className="playbackSliderContainer">
//   //           <span className="timeText">{secondsToMinutes(progress * duration)}</span>
//   //           <input className="playbackSlider" onChange={seek} type="range" min={0} max={maxProgress} value={progress * maxProgress} />
//   //           <span className="timeText">{secondsToMinutes((1 - progress) * duration)}</span>
//   //         </div>
//   //         <div className="volumeSliderContainer">
//   //           <input className="volumeSlider" onChange={updateVolume} type="range" min={0} max={maxVolume} value={volume * maxVolume} />
//   //         </div>
//   //       </div>
//   //     </HotKeys>
//   //   );
//   }
// };


// const secondsToMinutes = s => {
//   const minutes = Math.floor(s / 60);
//   const seconds = Math.floor(s) % 60;
//   return `${minutes}:${seconds.toLocaleString('en-US', { minimumIntegerDigits: 2 })}`;
// };

// export default AudioClass;
