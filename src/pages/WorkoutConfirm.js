import React, { useEffect } from "react";
import List from '../components/List';
import TimerCard from '../components/TimerCard';
import "../styles/workoutConfirm.css"

const WorkoutConfirm = (checkedArray, workoutExercises) => {

  useEffect(() => { document.body.style.backgroundColor = 'rgb(0, 233, 255)' }, [])
  useEffect(() => { document.body.style.backgroundImage = 'linear-gradient(0deg, rgba(0, 233, 255, 1) 23%, rgba(62, 240, 220, 1) 80%)' }, [])
  return (
    <div id="activeWorkout">
      <List />
      <TimerCard />
    </div>
  )
}

export default WorkoutConfirm