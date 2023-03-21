import React, {useState} from 'react'
import ExerciseCard from '../components/ExerciseCard'
import Timer from '../components/Timer'
import List from '../components/List'
import TimerCard from '../components/TimerCard'
import "../styles/WorkoutPage.css"
import { json } from 'react-router-dom'


const WorkoutPage = ({exerciseList, setExerciseList}) => {

  
  const [exerciseInProgress, setExerciseInProgress] = useState(false)
  const [timeRemaining, setTimeRemaining] = useState(0)
  const [exerciseIndex, setExerciseIndex] = useState(0)
  const [exerciseId, setExerciseId] = useState(0)

    // [{
    //   "bodyPart": "waist",
    //   "equipment": "body weight",
    //   "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0001.gif",
    //   "id": "0001",
    //   "name": "3/4 sit-up",
    //   "target": "abs"
    // },
    // {
    //   "bodyPart": "waist",
    //   "equipment": "body weight",
    //   "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0002.gif",
    //   "id": "0002",
    //   "name": "45° side bend",
    //   "target": "abs"
    // },
    // {
    //   "bodyPart": "waist",
    //   "equipment": "body weight",
    //   "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0003.gif",
    //   "id": "0003",
    //   "name": "air bike",
    //   "target": "abs"
    // },
    // {
    //   "bodyPart": "upper legs",
    //   "equipment": "body weight",
    //   "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/1512.gif",
    //   "id": "1512",
    //   "name": "all fours squad stretch",
    //   "target": "quads"
    // },
    // {
    //   "bodyPart": "waist",
    //   "equipment": "body weight",
    //   "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0006.gif",
    //   "id": "0006",
    //   "name": "alternate heel touchers",
    //   "target": "abs"
    // },
    // {
    //   "bodyPart": "back",
    //   "equipment": "cable",
    //   "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0007.gif",
    //   "id": "0007",
    //   "name": "alternate lateral pulldown",
    //   "target": "lats"
    // },
    // {
    //   "bodyPart": "lower legs",
    //   "equipment": "body weight",
    //   "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/1368.gif",
    //   "id": "1368",
    //   "name": "ankle circles",
    //   "target": "calves"
    // },
    // {
    //   "bodyPart": "back",
    //   "equipment": "body weight",
    //   "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/3293.gif",
    //   "id": "3293",
    //   "name": "archer pull up",
    //   "target": "lats"
    // }])

/* Donnahue -Tutor
setExerciseID is the state to store the current ID being used in the timer
We need to track which exercise is currently being ran
Idea 1: Create a new state that tracks the current exercise and compare that to our exerciseId var
Idea 2: Don't create a new state, but everytime we change our exercise in Timecard.js, grab the id and then compare it to our exercise id state



*/
   

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


