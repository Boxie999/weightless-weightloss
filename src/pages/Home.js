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
                <p id="homeIntro">Hey you!</p>
                <h1 id="homeTitle">LET'S GET YOUR BLOOD PUMPING</h1>
                <p>
                    <NavLink to="/workoutpicker">
                        <button className="btn btn-primary border-0 btn-lg chooseButton" href="#" type="button">QUICK WORKOUT</button>
                    </NavLink>
                    <NavLink to="/buildworkoutx">
                        <button className="btn btn-primary border-0 btn-lg chooseButton" href="#" type="button">CREATE WORKOUT PLAN</button>
                    </NavLink>
                </p>
            </div>
            <div id="myExercisesArea">
                <NavLink to="/favouriteexercises" style={{textDecoration: "none"}}>
                    <img id="starJumper" src={jumpingGuy} alt="Star Jumping Guy" />
                    <p id="exerciseHistory">MY FAVOURITE EXERCISES</p>
                </NavLink>
            </div>
        </div>
    );
}

export default Home;