import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import React from 'react';


function Timer() {
    let timerActive = true; //button onClick(timerActive= false) so the timer pauses
    let timerDuration = 30;
    

   return (
    <CountdownCircleTimer
    isPlaying={timerActive}
    duration={timerDuration}
    colors={'#02dec4'}
    //colorsTime={[30,]}
    //isSmoothColorTransition={true}  //if we want to add gradient, optional
    trailColor={'#d0f7f3'}
    strokeWidth={18}
    strokeLinecap={'square'}
    onComplete={() => {
        //On animation complete event handler, we can put a function here on what to do once the timer has finished, for example move onto the next exercise card.
        return { shouldRepeat: true, delay: 1.5 } 
      }} 
  >
    {({ remainingTime }) => remainingTime}
  </CountdownCircleTimer>
   )
   }

  
export default Timer;