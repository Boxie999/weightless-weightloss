import React, { useEffect, useState } from "react";
import "../styles/WorkoutPicker.css";
import { NavLink } from "react-router-dom";
import "../styles/WorkoutPicker.css"
import wholeBody from "../images/body/WholeBody.svg"
import upperBody from "../images/body/UpperBody.svg"
import core from "../images/body/Core.svg"
import legs from "../images/body/Legs.svg"

const fullBodyPlan = [1, 2, 3];
const upperBodyPlan = [4, 5, 6];
const corePlan = [7, 8, 9];
const legsPlan = [10, 11, 12];

function WorkoutPicker() {

    const [bodyPart, setBodyPart] = useState(fullBodyPlan)
    const [UpperIsShown, setUpperIsShown] = useState(false);
    const [CoreIsShown, setCoreIsShown] = useState(false);
    const [LegsIsShown, setLegsIsShown] = useState(false);

    useEffect(() => { localStorage.setItem('dataKey', JSON.stringify(bodyPart)) }, [bodyPart]);
    useEffect(() => { document.body.style.backgroundColor = 'white' }, [])
    useEffect(() => { document.body.style.backgroundImage = 'linear-gradient(0deg, rgba(0, 233, 255, 0) 23%, rgba(62, 240, 220, 0) 80%)' }, [])

    return (
        <div id="bodyPartPicker" className="text-center d-flex flex-column">
            <p id="selectText">Select the body area you would like to work out</p>

            <div id="figure">
                <img id="wholeBody" src={wholeBody} alt="whole body" />
                <img id="upperBody" src={upperBody} alt="upper body" onMouseEnter={() => setUpperIsShown(true)} onMouseLeave={() => setUpperIsShown(false)} onClick={() => setBodyPart(upperBodyPlan)} />
                <img id="core" src={core} alt="core" onMouseEnter={() => setCoreIsShown(true)} onMouseLeave={() => setCoreIsShown(false)} onClick={() => setBodyPart(corePlan)} />
                <img id="legs" src={legs} alt="" onMouseEnter={() => setLegsIsShown(true)} onMouseLeave={() => setLegsIsShown(false)} onClick={() => setBodyPart(legsPlan)} />
            </div>
            {(UpperIsShown || CoreIsShown || LegsIsShown) || (<label id="targetPart" >FULL BODY</label>)}
            {UpperIsShown && (<label id="targetPart" >UPPER BODY</label>)}
            {CoreIsShown && (<label id="targetPart" >CORE</label>)}
            {LegsIsShown && (<label id="targetPart" >LEGS</label>)}

            <NavLink to="/List">
                <button id="pickerStart" className="btn btn-primary border-0 btn-lg chooseButton" href="#" role="button">START WORKOUT</button>
            </NavLink>
        </div>
    );
}

export default WorkoutPicker;