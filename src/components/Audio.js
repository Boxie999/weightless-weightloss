import wav from '../music/fit-app-music.wav';
import React, { useEffect } from 'react';
    
function AudioComponent() {

     const audio = new Audio(wav)
     
// I want the music file to play as soon as the component renders. 

    //  useEffect(() => {
    //     audio.play();
    //     audio.loop=true;
    //   }, [])
      
        return (
            <div className="pp">
             
          </div>
        );
      }
      
      export default AudioComponent;