import React, {useState} from 'react'
import list from './List'
import "../styles/WorkoutPage.css"
import "../styles/TimerCard.css"
import startImage from '../images/startImage.png';

const StarterCard = () => {
  

  const [exerciseIndex, setExerciseIndex] = useState(0); 

  let exerciseList = [
    {name: "bodyweight standing one arm row (with towel)"},
    {name: "Exercise 2"},
    {name: "Exercise 3"},
    {name: "Exercise 4"},
    {name: "Exercise 5"},
    {name: "Exercise 6"}
]

    const cardImage = <img className='timerCardGif' src={startImage} alt="Card image cap" />
    
    const exerciseTitle = <h1 className="card-title-start">Ready <br/> steady<br/> GO!</h1>
  
  return (
    <div className='starterCard'>
      
      <div>{cardImage }</div>
      <div>{exerciseTitle}</div>
      <div>
        <p className={"nextExerciseText"}>
          Next Exercise: {exerciseList[exerciseIndex].name} 
        </p>
        </div>
      
    </div>
    
  )
}

export default StarterCard