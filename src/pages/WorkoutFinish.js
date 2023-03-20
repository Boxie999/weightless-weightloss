import React from 'react'
import "../styles/WorkoutFinish.css"
import finishImage from '/Users/admin/Downloads/bootcamp/simple-fit/src/images/finishImage.png';

const WorkoutFinish = () => {
  return ( <div className='workoutFinish'>
    <div><p className='finish-text'>Yo! Do you feel like Rocky yet? 'Cause...</p></div>
    <div><h1 className='finish-heading'>YOU ROCKED YOUR EXERCISE!</h1></div>
    <div><img className='finishImage' src={finishImage} alt='Finish workout image' /></div>
    </div>
  )
}

export default WorkoutFinish