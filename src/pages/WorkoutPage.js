import React, {useState} from 'react'
import ExerciseCard from '../components/ExerciseCard'
import Timer from '../components/Timer'
import List from '../components/List'
import TimerCard from '../components/TimerCard'
import StarterCard from '../components/StarterCard'
import "../styles/WorkoutPage.css"
import { json } from 'react-router-dom'


const WorkoutPage = ({exerciseList, setExerciseList}) => {

  
  const [exerciseInProgress, setExerciseInProgress] = useState(false)
  const [timeRemaining, setTimeRemaining] = useState(0)
  const [exerciseIndex, setExerciseIndex] = useState(0)
  const [exerciseId, setExerciseId] = useState(0)


  return (
    <div className='workoutPage'>
      <List exerciseList={exerciseList} exerciseIndex={exerciseIndex} setExerciseList={setExerciseList} 
      exerciseId={exerciseId} setExerciseId={setExerciseId} setExerciseInProgress={setExerciseInProgress}
      setTimeRemaining={setTimeRemaining} startButtonHidden={true} dragDisabled={true}

      ></List>
       < TimerCard  exerciseInProgress={exerciseInProgress}
      exerciseIndex={exerciseIndex}
      timeRemaining={timeRemaining}
      exerciseList={exerciseList}
      setExerciseId={setExerciseId}
      setExerciseIndex={setExerciseIndex}
      setExerciseInProgress={setExerciseInProgress}/>   
  
    </div>
    
  )
}

export default WorkoutPage


