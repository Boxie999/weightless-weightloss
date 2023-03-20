import React, {useState} from 'react'
import Timer from '../components/Timer'
import list from '../components/List'
import "../styles/WorkoutPage.css"
import "../styles/TimerCard.css"
import testerGif from "../images/testerGif.gif"


const TimerCard = () => {
  
  const [key, setKey] = useState(0)
    const [exerciseInProgress, setExerciseInProgress] = useState(false);
    const [duration, setDuration] = useState(10);
    const [isPlaying, setIsPlaying] = useState(true);
    const [exerciseIndex, setExerciseIndex] = useState(0); 

    let exerciseList = [
      {name: "Exercise 1"},
      {name: "Exercise 2"},
      {name: "Exercise 3"},
      {name: "Exercise 4"},
      {name: "Exercise 5"},
      {name: "Exercise 6"}
  ]

    const exerciseGif = <img className='timerCardGif' src={testerGif} alt="Card image cap" />
    const exerciseTitle = <h6 className="card-title">{exerciseInProgress === false ? "Rest" : exerciseList[exerciseIndex-1].name}</h6>
  
  return (
    <div className='timerCard'>
      
      <div>{exerciseInProgress ? exerciseGif : "" }</div>
      <div>{exerciseTitle}</div>
      <div>< Timer  
      key={key}
      setKey={setKey}
      exerciseInProgress={exerciseInProgress}
      setExerciseInProgress={setExerciseInProgress}
      duration={duration}
      setDuration={setDuration}
      isPlaying={isPlaying}
      setIsPlaying={setIsPlaying}
      exerciseIndex={exerciseIndex}
      setExerciseIndex={setExerciseIndex}
      />  </div> 
      
      <div>
        <button onClick={() => 
        duration > 10 ? setDuration(duration - 10) : setDuration(duration)} >
          - 10s
        </button>

        <button className='pauseButton' onClick={() => 
            isPlaying === true ? setIsPlaying(false) : setIsPlaying(true)} >Tap to  
          {isPlaying === true ? " Pause" : " Play"}
        </button>

        <button onClick={() => 
            setDuration(duration + 10)} >
          + 10s
        </button>
        </div>

        <div>
        <p>
          Next Exercise: { exerciseIndex < exerciseList.length ? exerciseList[exerciseIndex].name : "Finish Workout" } 
        </p>
        </div>
      
        
      
      
    </div>
    
  )
}

export default TimerCard