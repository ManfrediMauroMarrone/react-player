import React from 'react';
import LibrarySong from './LibrarySong';

const Library = ({songs, setCurrentSong, audioRef, isPlaying}) => {
    return (
        <div className="library">
            <h2>Library</h2>
            <div className="library-songs">
                {songs.map((song) => (<LibrarySong isPlaying={isPlaying} audioRef={audioRef} songs={songs} setCurrentSong={setCurrentSong} song={song} id={song.id} key={song.id}/>))}
            </div>
        </div>
    )
}

export default Library;