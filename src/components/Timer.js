import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import React, { useState } from 'react';


function Timer({timeRemaining, exerciseInProgress}) {

   return (
    <CountdownCircleTimer
    isPlaying={exerciseInProgress}
    duration={timeRemaining}
    colors={'#02dec4'}
    //colorsTime={[30,]}
    //isSmoothColorTransition={true}  //if we want to add gradient, optional
    trailColor={'#d0f7f3'}
    strokeWidth={15}
    strokeLinecap={'square'}
    size={140}
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