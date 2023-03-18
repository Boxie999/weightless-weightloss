import React, {useState} from 'react'
import Timer from '../components/Timer'
import "../styles/TimerCard.css"
import testerGif from "../images/testerGif.gif"


const TimerCard = ({exerciseInProgress, timeRemaining, exerciseIndex, setExerciseInProgress}) => {
  
 const pauseTimer = () => {
    setExerciseInProgress(!exerciseInProgress)
  }

  return (
    <div className='timerCard'>
        
        <div><img className='timerCardGif' src={testerGif} alt="Card image cap" /></div>
        <div><h6 className="card-title">Archer Pull Up</h6></div>
        <div><Timer exerciseInProgress={exerciseInProgress}
        timeRemaining={timeRemaining}
        exerciseIndex={exerciseIndex}/></div>
        
        <div><button  onClick={pauseTimer}>Tap to {exerciseInProgress ? 'Pause' : 'Play'}</button></div>
        
        <div><p>Next:</p></div>
      
      
    </div>
    
  )
}

export default TimerCard