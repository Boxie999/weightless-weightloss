import { NavLink } from "react-router-dom";
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
                <NavLink to="/WorkoutPicker"><button className="btn btn-primary border-0 btn-lg chooseButton" href="#" role="button">CHOOSE WORKOUT</button></NavLink>
                    <button className="btn btn-primary border-0 btn-lg chooseButton" href="#" role="button">CREATE A PLAN</button>
                </p>
            </div>
            <div id="myExercisesArea">
                <img id="starJumper" src={jumpingGuy} alt="Star Jumping Guy" />
                <p id="excerciseHistory">MY EXCERCISE HISTORY</p>
            </div>
        </div>
    );
}

export default Home;