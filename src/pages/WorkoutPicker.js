import React, { useEffect } from "react";
import "../styles/WorkoutPicker.css";
import { NavLink } from "react-router-dom";
import "../styles/WorkoutPicker.css"
import wholeBody from "../images/body/WholeBody.svg"
import upperBody from "../images/body/UpperBody.svg"
import core from "../images/body/Core.svg"
import legs from "../images/body/Legs.svg"

function WorkoutPicker() {

    useEffect(() => { document.body.style.backgroundColor = 'white' }, [])
    useEffect(() => { document.body.style.backgroundImage = 'linear-gradient(0deg, rgba(0, 233, 255, 0) 23%, rgba(62, 240, 220, 0) 80%)' }, [])

    return (
        <div id="bodyPartPicker" className="text-center d-flex flex-column">
            <p id="selectText">Select the body area you would like to work out</p>

            <div id="figure">
                <img id="wholeBody" src={wholeBody} alt="whole body" />
                <img id="upperBody" src={upperBody} alt="upper body" />
                <img id="core" src={core} alt="core" />
                <img id="legs" src={legs} alt="" />
            </div>
            <label id="targetPart" >FULL BODY</label>





            <button id="pickerStart" className="btn btn-primary border-0 btn-lg chooseButton" href="#" role="button">START WORKOUT</button>
        </div>
    );
}

export default WorkoutPicker;