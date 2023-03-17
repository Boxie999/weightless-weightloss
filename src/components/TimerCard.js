import React, {useState} from 'react'
import Timer from '../components/Timer'
import "../styles/TimerCard.css"
import testerGif from "../images/testerGif.gif"


const TimerCard = ({exerciseInProgress, timeRemaining, exerciseIndex}) => {
  
//   const pauseTimer = () => {
//     setExerciseInProgress(false)
//   }

  return (
    <div className='timerCard'>
        
        <div><img className='timerCardGif' src={testerGif} alt="Card image cap" /></div>
        <div><h6 className="card-title">Archer Pull Up</h6></div>
        <div><Timer exerciseInProgress={exerciseInProgress}
        timeRemaining={timeRemaining}
        exerciseIndex={exerciseIndex}/></div>
        
        <div><button /* onClick={pauseTimer}*/>Tap to Pause</button></div>
        
        <div><p>Next:</p></div>
      
      
    </div>
    
  )
}

export default TimerCard