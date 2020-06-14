import React, { useState, useEffect } from 'react';
import NewSongForm from './NewSongForm';

const SongList = () => {
    const [ songs, setSongs ] = useState([
        {title: 'almost home', id: 1 },
        {title: 'memory gospel', id: 2 },
        {title: 'this wild darkness', id: 3 }
    ]);

    const addSong = (title) => {
        setSongs([ ...songs, {title, id: 4}]);
    }
   
    useEffect(() => {
        console.log(songs);
    }, [songs])
     
     return (
        <div style={{padding: '10px'}}>
            <ul>
               {songs.map(song => {
                   return (
                       <li key={song.id}>{song.title}</li>
                   );
               })}
            </ul>
            <NewSongForm addSong={addSong}/>  
        </div>
         
    )
}

export default SongList;