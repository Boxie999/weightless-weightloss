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


function WorkoutPicker() {

    const [bodyPart, setBodyPart] = useState(fullBodyPlan)
    const [UpperIsShown, setUpperIsShown] = useState(false);
    const [CoreIsShown, setCoreIsShown] = useState(false);
    const [LegsIsShown, setLegsIsShown] = useState(false);
    const [UpperIsSelected, setUpperIsSelected] = useState(false);
    const [CoreIsSelected, setCoreIsSelected] = useState(false);
    const [LegsIsSelected, setLegsIsSelected] = useState(false);
    const [bodyRegionName, setBodyRegionName] = useState("FULL BODY");

    useEffect(() => { localStorage.setItem('workout builder list', JSON.stringify(bodyPart)) }, [bodyPart]);
    useEffect(() => { document.body.style.backgroundColor = 'white' }, [])
    useEffect(() => { document.body.style.backgroundImage = 'linear-gradient(0deg, rgba(0, 233, 255, 0) 23%, rgba(62, 240, 220, 0) 80%)' }, [])

    return (
        <div id="bodyPartPicker" className="text-center d-flex flex-column">
            <p id="selectText">Select the body area you would like to work out</p>

            <div id="figure">
                <img id="wholeBody" src={wholeBody} alt="whole body" />
                <img id="upperBody" src={upperBody} alt="upper body" onMouseEnter={() => setUpperIsShown(true)} onMouseLeave={() => setUpperIsShown(false)} onClick={() => { setBodyPart(upperBodyPlan); setBodyRegionName("UPPER BODY") }} onMouseUp={() => { setUpperIsSelected(true); setCoreIsSelected(false); setLegsIsSelected(false) }} />
                {UpperIsSelected && (<img id="upperBodyX" src={upperBodyX} alt="upper body" onClick={() => { setUpperIsSelected(false); setBodyPart(fullBodyPlan); setBodyRegionName("FULL BODY") }} />)}
                <img id="core" src={core} alt="core" onMouseEnter={() => setCoreIsShown(true)} onMouseLeave={() => setCoreIsShown(false)} onClick={() => { setBodyPart(corePlan); setBodyRegionName("CORE") }} onMouseUp={() => { setCoreIsSelected(true); setUpperIsSelected(false); setLegsIsSelected(false) }} />
                {CoreIsSelected && (<img id="coreX" src={coreX} alt="core" onClick={() => { setCoreIsSelected(false); setBodyPart(fullBodyPlan); setBodyRegionName("FULL BODY") }} />)}
                <img id="legs" src={legs} alt="legs" onMouseEnter={() => setLegsIsShown(true)} onMouseLeave={() => setLegsIsShown(false)} onClick={() => { setBodyPart(legsPlan); setBodyRegionName("LEGS") }} onMouseUp={() => { setLegsIsSelected(true); setUpperIsSelected(false); setCoreIsSelected(false) }} />
                {LegsIsSelected && (<img id="legsX" src={legsX} alt="legs" onClick={() => { setLegsIsSelected(false); setBodyPart(fullBodyPlan); setBodyRegionName("FULL BODY") }} />)}
            </div>
            {(UpperIsShown || CoreIsShown || LegsIsShown) || (<label id="targetPart" >{bodyRegionName}</label>)}
            {UpperIsShown && (<label id="targetPart" >UPPER BODY</label>)}
            {CoreIsShown && (<label id="targetPart" >CORE</label>)}
            {LegsIsShown && (<label id="targetPart" >LEGS</label>)}

            <NavLink to="/WorkoutList">
                <button id="pickerStart" className="btn btn-primary border-0 btn-lg chooseButton" role="button">START WORKOUT</button>
            </NavLink>
        </div>
    );
}

export default WorkoutPicker;