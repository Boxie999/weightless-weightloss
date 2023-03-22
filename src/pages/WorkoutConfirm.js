import React, { useEffect, useState } from "react";
import List from '../components/List';
import TimerCard from '../components/TimerCard';
import "../styles/workoutConfirm.css"

const WorkoutConfirm = (checkedArray, workoutExercises) => {

  useEffect(() => { document.body.style.backgroundColor = 'rgb(0, 233, 255)' }, [])
  useEffect(() => { document.body.style.backgroundImage = 'linear-gradient(0deg, rgba(0, 233, 255, 1) 23%, rgba(62, 240, 220, 1) 80%)' }, [])

  const [objects, setObjects] = useState(
    [
        {
            "bodyPart": "upper legs",
            "equipment": "body weight",
            "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/3433.gif",
            "id": "3433",
            "name": "swimmer kicks v. 2 (male)",
            "target": "glutes"
          },
          {
            "bodyPart": "upper legs",
            "equipment": "body weight",
            "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/2368.gif",
            "id": "2368",
            "name": "split squats",
            "target": "quads"
          },
          {
            "bodyPart": "upper legs",
            "equipment": "body weight",
            "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0778.gif",
            "id": "0778",
            "name": "spider crawl push up",
            "target": "glutes"
          },
          {
            "bodyPart": "upper legs",
            "equipment": "body weight",
            "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/1587.gif",
            "id": "1587",
            "name": "seated wide angle pose sequence",
            "target": "hamstrings"
          },
          {
            "bodyPart": "upper legs",
            "equipment": "body weight",
            "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/1576.gif",
            "id": "1576",
            "name": "leg up hamstring stretch",
            "target": "hamstrings"
          }
    ]
)

  return (
    <div id="activeWorkout">
      <List objects={objects}
      setObjects={setObjects}/>
      <TimerCard objects={objects}
      setObjects={setObjects} />
    </div>
  )
}

export default WorkoutConfirm