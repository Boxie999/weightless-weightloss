import React from 'react'
import "../styles/WorkoutPage.css"
import "../styles/TimerCard.css"
import startImage from '../images/startImage.png';

const StarterCard = () => {
  
    const cardImage = <img className='timerCardGif' src={startImage} alt="Starter" />
    
    const exerciseTitle = <h1 className="card-title-start">Ready <br/> steady<br/> GO!</h1>
  
  return (
    <div className='starterCard'>
      
      <div>{cardImage }</div>
      <div>{exerciseTitle}</div>
      
      
    </div>
    
  )
}

export default StarterCard