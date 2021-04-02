import React, {useState, useRef} from 'react';
//import styles
import './styles/app.scss'
//Adding components
import Player from './components/Player';
import Song from './components/Song';
import Library from './components/Library';
//import Util
import data from './util';


function App() {
  //Ref
    const audioRef = useRef(null);
  //add data with State
  const [songs, setSongs] = useState(data());

  const [isPlaying, setIsPlaying] = useState(false);

  const [currentSong, setCurrentSong] = useState(songs[1]);

  const [songInfo, setSongInfo] = useState({
        currentTime: 0,
        duration: 0,
  });
  //this function handles the update of duration and currente time of the current song
  const timeUpdateHandler = (e) => {
      const current = e.target.currentTime;
      const duration = e.target.duration;
      setSongInfo({ ...songInfo, currentTime: current, duration: duration });
  };
  return (
    <div className="App">
      <Song currentSong={currentSong}/>
      <Player setSongInfo={setSongInfo} songInfo={songInfo} audioRef={audioRef} isPlaying={isPlaying} setIsPlaying={setIsPlaying} currentSong={currentSong} />
      <Library isPlaying={isPlaying} audioRef={audioRef} songs={songs} setCurrentSong={setCurrentSong} />
      <audio onLoadedMetadata={timeUpdateHandler} onTimeUpdate={timeUpdateHandler} ref={audioRef} src={currentSong.audio}></audio>
    </div>
  );
}

export default App;
