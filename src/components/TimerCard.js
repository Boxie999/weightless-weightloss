import React, {useState} from 'react'
import Timer from '../components/Timer'
import "../styles/WorkoutPage.css"
import "../styles/TimerCard.css"
import restImage from '../images/restImage.png';

//setting the states here 
const TimerCard = ({exerciseList, setExerciseId, exerciseIndex, setExerciseIndex}) => {
  // console.log(exerciseList);
    const [timerKey, setKey] = useState(0)
    const [exerciseInProgress, setExerciseInProgress] = useState(true);
    const [duration, setDuration] = useState(30);
    const [isPlaying, setIsPlaying] = useState(true);
   
    //the images change whether if it's the exercise card or the rest card
    const exerciseGif = <img className='timerCardGif' src={exerciseIndex < exerciseList.length ? exerciseList[exerciseIndex].gifUrl.replace("http://", "https://")|| "" : '' } alt="Card" />
    const restShow = <img className='timerCardGif' src={restImage} alt='Card' />
  
    const exerciseTitle = <h6 className="card-title">{exerciseInProgress === false ? "Rest" : exerciseList[exerciseIndex].name}</h6>

    // Buttons added in the JSX below to toggle between Pause and Play, and to give the user the opportunity to increase or decrease the time for rest or exercise.
  
  return (
    <div className='timerCard'>
      
      <div>{exerciseInProgress ? exerciseGif : restShow }</div>
      <div>{exerciseTitle}</div>
      <br/>
      <div>< Timer  
      timerKey={timerKey}
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
          Next Exercise: { exerciseIndex < exerciseList.length - 1 ? exerciseList[exerciseIndex + 1].name : "Finish Workout" } 
        </p>
        </div>
      
        
      
      
    </div>
    
  )
}

export default TimerCard