import React, {useState} from 'react'
import Timer from '../components/Timer'
import "../styles/TimerCard.css"


const TimerCard = ({exerciseInProgress, timeRemaining, exerciseIndex}) => {
  

  return (
    <div className='timerCard'>
        <div></div>
        <div><Timer exerciseInProgress={exerciseInProgress}
        timeRemaining={timeRemaining}/></div>
      
      
    </div>
    
  )
}

export default TimerCard