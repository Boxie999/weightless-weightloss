import React, { useEffect, useState} from "react";
import "../styles/WorkoutPicker.css";
import { NavLink } from "react-router-dom";
import "../styles/WorkoutPicker.css"
import wholeBody from "../images/body/WholeBody.svg"
import upperBody from "../images/body/UpperBody.svg"
import core from "../images/body/Core.svg"
import legs from "../images/body/Legs.svg"

const fullBodyPlan =
    [
        { name: 'full body 1' },
        { name: 'full body 2' },
        { name: 'full body 3' },
        { name: 'full body 4' },
        { name: 'full body 5' },
        { name: 'full body 6' }
    ];
const upperBodyPlan =
[
    { name: 'upper body 1' },
    { name: 'upper body 2' },
    { name: 'upper body 3' },
    { name: 'upper body 4' },
    { name: 'upper body 5' },
    { name: 'upper body 6' }
];
const corePlan =
[
    { name: 'core 1' },
    { name: 'core 2' },
    { name: 'core 3' },
    { name: 'core 4' },
    { name: 'core 5' },
    { name: 'core 6' }
];
const legsPlan =
[
    { name: 'legs 1' },
    { name: 'legs 2' },
    { name: 'legs 3' },
    { name: 'legs 4' },
    { name: 'legs 5' },
    { name: 'legs 6' }
];

function WorkoutPicker() {

    const [bodyPart, setBodyPart] = useState(fullBodyPlan)
    const [bodyRegionName, setBodyRegionName] = useState("FULL BODY");
    const [UpperIsShown, setUpperIsShown] = useState(false);
    const [CoreIsShown, setCoreIsShown] = useState(false);
    const [LegsIsShown, setLegsIsShown] = useState(false); 
    
    useEffect(() => { localStorage.setItem('workout builder list', JSON.stringify(bodyPart)) }, [bodyPart]);

    useEffect(() => { document.body.style.backgroundColor = 'white' }, [])
    useEffect(() => { document.body.style.backgroundImage = 'linear-gradient(0deg, rgba(0, 233, 255, 0) 23%, rgba(62, 240, 220, 0) 80%)' }, [])

    return (
        <div id="bodyPartPicker" className="text-center d-flex flex-column">
            <p id="selectText">Select the body area you would like to work out</p>

            <div id="figure">
                <img id="wholeBody" src={wholeBody} alt="whole body" />

                <img id="upperBody" src={upperBody} alt="upper body" onMouseEnter={() => setUpperIsShown(true)} onMouseLeave={() => setUpperIsShown(false)} onClick={() => {                    

                    if(bodyPart === upperBodyPlan) {

                        console.log(bodyPart);

                        setBodyPart(fullBodyPlan);
                        setBodyRegionName("FULL BODY");
                        console.log(bodyPart);

                    } else {

                        console.log(bodyPart);

                        setUpperIsShown(true);

                        setBodyPart(upperBodyPlan);
                        setBodyRegionName("UPPER BODY");
                        console.log(bodyPart);

                        {{}}
                    }
                    }} />

                <img id="core" src={core} alt="core" onMouseEnter={() => setCoreIsShown(true)} onMouseLeave={() => setCoreIsShown(false)} onClick={() => {                 
                    
                    if(bodyPart === corePlan) {

                        console.log(bodyPart);

                        setBodyPart(fullBodyPlan);
                        setBodyRegionName("FULL BODY");
                        console.log(bodyPart);

                    } else {

                        console.log(bodyPart);

                        setBodyPart(corePlan);
                        setCoreIsShown(true);
                        setBodyRegionName("CORE");
                        console.log(bodyPart);
                    }                    
                    }} />

                <img id="legs" src={legs} alt="" onMouseEnter={() => setLegsIsShown(true)} onMouseLeave={() => setLegsIsShown(false)} onClick={() => {

                    

                    if(bodyPart === legsPlan) {

                        console.log(bodyPart);

                        setBodyPart(fullBodyPlan);
                        setBodyRegionName("FULL BODY");
                        console.log(bodyPart);

                    } else {

                        console.log(bodyPart);

                        setBodyPart(legsPlan);
                        setLegsIsShown(true);
                        setBodyRegionName("LEGS");
                        console.log(bodyPart);
                    }              
                }}  />
            </div>

            <label id="targetPart" >{bodyRegionName}</label>

            <NavLink to="/List">
                <button id="pickerStart" className="btn btn-primary border-0 btn-lg chooseButton" href="#" role="button">START WORKOUT</button>
            </NavLink>
        </div>
    );
}

export default WorkoutPicker;
