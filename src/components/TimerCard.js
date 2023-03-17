import React, {useState} from 'react'
import Timer from '../components/Timer'
import "../styles/TimerCard.css"


const TimerCard = ({exerciseInProgress, timeRemaining, exerciseIndex}) => {
  

  return (
    <div className='timerCard'>
        <div></div>
        <div></div>
        <div><Timer exerciseInProgress={exerciseInProgress}
        timeRemaining={timeRemaining}
        exerciseIndex={exerciseIndex}/></div>
        
        <div><button>Tap to Pause</button></div>
        
        <div><p>Next:</p></div>
      
      
    </div>
    
  )
}

export default TimerCard