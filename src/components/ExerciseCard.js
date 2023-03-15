import React from 'react';
import { Link } from "react-router-dom";
import { Button, Stack } from "react-bootstrap";


const ExerciseCard = ({ exercise }) => {
  return (
    <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
      <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
      <Stack direction="horizontal" gap={3}>
        <Button style={{color: "cyan", background: "silver", fontSize: "15px", textTransform: "capitalise"}}>
          {exercise.bodyPart}

        </Button>
        <Button style={{color: "cyan", background: "silver", fontSize: "15px", textTransform: "capitalise"}}>
          {exercise.target}

        </Button>
        <Button style={{color: "cyan", background: "silver", fontSize: "15px", textTransform: "capitalise"}}>
          {exercise.equipment}

        </Button>
      </Stack>
      <p style={{fontWeight: "bold", color: "black", textDecoration: "none", textTransform: "capitalize" }}>{exercise.name}</p>

    </Link>
  )
}

export default ExerciseCard