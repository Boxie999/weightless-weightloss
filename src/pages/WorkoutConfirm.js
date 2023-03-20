import React from 'react'
import List from '../components/List';
import TimerCard from '../components/TimerCard';
import "../styles/workoutConfirm.css"

const WorkoutConfirm = (checkedArray, workoutExercises) => {
  return (
    <div id="activeWorkout">
      <List />
      <TimerCard />
    </div>
  )
}

export default WorkoutConfirm