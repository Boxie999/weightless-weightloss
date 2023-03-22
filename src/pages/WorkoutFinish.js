import React, { useEffect } from 'react'
import "../styles/WorkoutFinish.css"
import finishImage from '../images/finishImage.png';
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";


const WorkoutFinish = () => {
  useEffect(() => { document.body.style.backgroundColor = 'rgb(0, 233, 255)' }, [])
  useEffect(() => { document.body.style.backgroundImage = 'linear-gradient(0deg, rgba(0, 233, 255, 1) 23%, rgba(62, 240, 220, 1) 80%)' }, [])
  return ( <div className='workoutFinish'>
    <div><p className='finish-text'>Yo! Do you feel like Rocky yet? 'Cause...</p></div>
    <div><h1 className='finish-heading'>YOU ROCKED YOUR EXERCISE!</h1></div>
    <div><img className='finishImage' src={finishImage} alt='Finish workout image' /></div>
    <div><NavLink to="/">
                        <button className="btn btn-primary border-0 btn-lg chooseButton" href="#" type="button">GO TO HOMEPAGE</button>
                    </NavLink></div>
    </div>
  )
}

export default WorkoutFinish