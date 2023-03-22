import React, {useState, useEffect} from 'react'
import ExerciseCard from '../components/ExerciseCard'
import Timer from '../components/Timer'
import List from '../components/List'
import TimerCard from '../components/TimerCard'
import "../styles/WorkoutPage.css"
import { json } from 'react-router-dom'
import StarterCard from '../components/StarterCard'


const WorkoutList = ({exerciseList, setExerciseList}) => {
  
  const [exerciseInProgress, setExerciseInProgress] = useState(false)
  const [timeRemaining, setTimeRemaining] = useState(0)
  const [exerciseIndex, setExerciseIndex] = useState(0)
  const [exerciseId, setExerciseId] = useState()


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


