import React, {useState, useEffect} from 'react'
import List from '../components/List'
import "../styles/WorkoutPage.css"
import StarterCard from '../components/StarterCard'


const WorkoutList = ({exerciseList, setExerciseList}) => {
  
  const [exerciseInProgress, setExerciseInProgress] = useState(false)
  const [timeRemaining, setTimeRemaining] = useState(0)
  const [exerciseIndex, setExerciseIndex] = useState(0)
  const [exerciseId, setExerciseId] = useState()



    useEffect(() => { document.body.style.backgroundColor = 'rgb(0, 233, 255)' }, [])
    useEffect(() => { document.body.style.backgroundImage = 'linear-gradient(0deg, rgba(0, 233, 255, 1) 23%, rgba(62, 240, 220, 1) 80%)' }, [])

  return (
    <div className='workoutPage'>
      
      <List exerciseList={exerciseList} exerciseIndex={exerciseIndex} setExerciseList={setExerciseList} 
      exerciseId={exerciseId} setExerciseId={setExerciseId} setExerciseInProgress={setExerciseInProgress}
      setTimeRemaining={setTimeRemaining}
      ></List>
      <StarterCard />
     
    </div>
    
  )
}

export default WorkoutList


