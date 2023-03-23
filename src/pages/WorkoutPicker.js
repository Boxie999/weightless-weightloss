import React, { useEffect, useState } from "react";
import "../styles/WorkoutPicker.css";
import { NavLink } from "react-router-dom";
import "../styles/WorkoutPicker.css";
import wholeBody from "../images/body/WholeBody.svg";
import upperBody from "../images/body/UpperBody.svg";
import core from "../images/body/Core.svg";
import legs from "../images/body/Legs.svg";
import upperBodyX from "../images/body/UpperBodyX.svg";
import coreX from "../images/body/CoreX.svg";
import legsX from "../images/body/LegsX.svg";
import fullBodyPlan from "../fullBodyPlan.json";
import corePlan from "../corePlan.json";
import upperBodyPlan from "../upperBodyPlan.json";
import legsPlan from "../legsPlan.json";


function WorkoutPicker({setExerciseList}) {

    const [bodyPart, setBodyPart] = useState(fullBodyPlan) // Dictates which body part workout plan will be implemented
    const [UpperIsShown, setUpperIsShown] = useState(false); // Relates to the hover effect on the Quick Workout figure for Upper Body
    const [CoreIsShown, setCoreIsShown] = useState(false); // Relates to the hover effect on the Quick Workout figure for Core
    const [LegsIsShown, setLegsIsShown] = useState(false); // Relates to the hover effect on the Quick Workout figure for Legs
    const [UpperIsSelected, setUpperIsSelected] = useState(false); // Relates to the upperbody part lighting up when selected
    const [CoreIsSelected, setCoreIsSelected] = useState(false); // Relates to the core part lighting up when selected
    const [LegsIsSelected, setLegsIsSelected] = useState(false); // Relates to the legs part lighting up when selected
    const [bodyRegionName, setBodyRegionName] = useState("FULL BODY");

    useEffect(() => { localStorage.setItem('workout builder list', JSON.stringify(bodyPart)) }, [bodyPart]); // Sets the body part in question into local storage
    useEffect(() => { document.body.style.backgroundColor = 'white' }, [])
    useEffect(() => { document.body.style.backgroundImage = 'linear-gradient(0deg, rgba(0, 233, 255, 0) 23%, rgba(62, 240, 220, 0) 80%)' }, [])

    return (
        <div id="bodyPartPicker" className="text-center d-flex flex-column">
            <p id="selectText">Select the body area you would like to work out</p>

            <div id="figure">
                {/*Code for the Whole Body Figure*/}
                <img id="wholeBody" src={wholeBody} alt="whole body" />
                {/*Code for the Upper Body part - when clicked, it should be selected and light up*/}
                <img id="upperBody" src={upperBody} alt="upper body" onMouseEnter={() => setUpperIsShown(true)} onMouseLeave={() => setUpperIsShown(false)} onClick={() => { setExerciseList(upperBodyPlan); setBodyRegionName("UPPER BODY") }} onMouseUp={() => { setUpperIsSelected(true); setCoreIsSelected(false); setLegsIsSelected(false) }} />
                {/*Code for the Upper Body part - when clicked again, it should turn off, and current body part should revert to fullBodyPlan*/}
                {UpperIsSelected && (<img id="upperBodyX" src={upperBodyX} alt="upper body" onClick={() => { setUpperIsSelected(false); setExerciseList(fullBodyPlan); setBodyRegionName("FULL BODY") }} />)}
                {/*Code for the Core part - when clicked, it should be selected and light up*/}
                <img id="core" src={core} alt="core" onMouseEnter={() => setCoreIsShown(true)} onMouseLeave={() => setCoreIsShown(false)} onClick={() => { setExerciseList(corePlan); setBodyRegionName("CORE") }} onMouseUp={() => { setCoreIsSelected(true); setUpperIsSelected(false); setLegsIsSelected(false) }} />
                {/*Code for the Core part - when clicked again, it should turn off, and current body part should revert to fullBodyPlan*/}
                {CoreIsSelected && (<img id="coreX" src={coreX} alt="core" onClick={() => { setCoreIsSelected(false); setExerciseList(fullBodyPlan); setBodyRegionName("FULL BODY") }} />)}
                {/*Code for the Legs part - when clicked, it should be selected and light up*/}
                <img id="legs" src={legs} alt="legs" onMouseEnter={() => setLegsIsShown(true)} onMouseLeave={() => setLegsIsShown(false)} onClick={() => { setExerciseList(legsPlan); setBodyRegionName("LEGS") }} onMouseUp={() => { setLegsIsSelected(true); setUpperIsSelected(false); setCoreIsSelected(false) }} />
                {/*Code for the Legs part - when clicked again, it should turn off, and current body part should revert to fullBodyPlan*/}
                {LegsIsSelected && (<img id="legsX" src={legsX} alt="legs" onClick={() => { setLegsIsSelected(false); setExerciseList(fullBodyPlan); setBodyRegionName("FULL BODY") }} />)}
            </div>
            {(UpperIsShown || CoreIsShown || LegsIsShown) || (<label id="targetPart" >{bodyRegionName}</label>)}
            {UpperIsShown && (<label id="targetPart" >UPPER BODY</label>)}
            {CoreIsShown && (<label id="targetPart" >CORE</label>)}
            {LegsIsShown && (<label id="targetPart" >LEGS</label>)}

            <NavLink to="/workoutList">
                <button id="pickerStart" className="btn btn-primary border-0 btn-lg chooseButton" type="button">START WORKOUT</button>
            </NavLink>
        </div>
    );
}

export default WorkoutPicker;