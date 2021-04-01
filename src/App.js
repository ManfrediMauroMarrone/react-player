import React, {useState} from 'react';
//import styles
import './styles/app.scss'
//Adding components
import Player from './components/Player';
import Song from './components/Song';
//import Util
import data from './util';


function App() {
  //add data with State
  const [songs, setSongs] = useState(data());

  const [isPlaying, setIsPlaying] = useState(false);

  const [currentSong, setCurrentSong] = useState(songs[1]);
  return (
    <div className="App">
      <Song currentSong={currentSong}/>
      <Player isPlaying={isPlaying} setIsPlaying={setIsPlaying} currentSong={currentSong}/>
    </div>
  );
}

export default App;
