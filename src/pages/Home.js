import { NavLink } from "react-router-dom";
import { Nav } from "react-bootstrap";
import React, { useEffect } from "react";
import "../styles/Home.css"
import jumpingGuy from "../images/StarJump.gif"

function Home() {

    useEffect(() => { document.body.style.backgroundColor = 'rgb(0, 233, 255)' }, [])
    useEffect(() => { document.body.style.backgroundImage = 'linear-gradient(0deg, rgba(0, 233, 255, 1) 23%, rgba(62, 240, 220, 1) 80%)' }, [])

    return (
        <div>
            <div id="homeIntroJumbo" className="jumbotron">
                <p id="homeIntro">Good morning!</p>
                <h1 id="homeTitle">LET'S GET YOUR BLOOD PUMPING</h1>
                <p>
                <NavLink to="/WorkoutPicker">
                    <button className="btn btn-primary border-0 btn-lg chooseButton" href="#" type="button">QUICK WORKOUT</button>
                </NavLink>
                <NavLink to="/BuildWorkout">
                    <button className="btn btn-primary border-0 btn-lg chooseButton" href="#" type="button">CREATE WORKOUT PLAN</button>
                </NavLink>
                </p>
            </div>
            <div id="myExercisesArea">
                <Nav.Link href="/FavouriteExercises">
                    <img id="starJumper" src={jumpingGuy} alt="Star Jumping Guy" />
                    <p id="excerciseHistory">MY EXERCISE HISTORY</p>
                </Nav.Link>
            </div>
        </div>
    );
}

export default Home;