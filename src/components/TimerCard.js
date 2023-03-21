import React, {useState} from 'react'
import Timer from '../components/Timer'
import list from '../components/List'
import "../styles/WorkoutPage.css"
import "../styles/TimerCard.css"
import testerGif from "../images/testerGif.gif"
import restImage from '../images/restImage.png';

const TimerCard = ({exerciseList, setExerciseId, exerciseIndex, setExerciseIndex}) => {
  console.log(exerciseList);
  const [key, setKey] = useState(0)
    const [exerciseInProgress, setExerciseInProgress] = useState(false);
    const [duration, setDuration] = useState(10);
    const [isPlaying, setIsPlaying] = useState(true);
   

    const exerciseGif = <img className='timerCardGif' src={testerGif} alt="Card image cap" />
    const restImageShow = <img className='timerCardGif' src={restImage} alt='Card image cap' />
    const exerciseTitle = <h6 className="card-title">{exerciseInProgress === false ? "Rest" : exerciseList[exerciseIndex-1].name}</h6>
  
  return (
    <div className='timerCard'>
      
      <div>{exerciseInProgress ? exerciseGif : restImageShow }</div>
      <div>{exerciseTitle}</div>
      <br/>
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
      setExerciseId={setExerciseId}
      exerciseList={exerciseList}
      />  </div> 
      
      <div>
        
        <button onClick={() => 
        duration > 10 ? setDuration(duration - 10) : setDuration(duration)} >
          - 10s
        </button>

        <button onClick={() => 
        duration > 1 ? setDuration(duration - 1) : setDuration(duration)} >
          - 1s
        </button>

        <button className='pauseButton' onClick={() => 
            isPlaying === true ? setIsPlaying(false) : setIsPlaying(true)} >Tap to  
          {isPlaying === true ? " Pause" : " Play"}
        </button>

        <button onClick={() => 
            setDuration(duration + 1)} >
          + 1s
        </button>

        <button onClick={() => 
            setDuration(duration + 10)} >
          + 10s
        </button>
        </div>

        <div>
        <p className={"nextExerciseText"}>
          Next Exercise: { exerciseIndex < exerciseList.length ? exerciseList[exerciseIndex].name : "Finish Workout" } 
        </p>
        </div>
      
        
      
      
    </div>
    
  )
}

export default TimerCard