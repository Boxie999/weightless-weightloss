import React, { useEffect, useState } from "react";
import "../styles/WorkoutPicker.css";
import { NavLink } from "react-router-dom";
import "../styles/WorkoutPicker.css"
import wholeBody from "../images/body/WholeBody.svg"
import upperBody from "../images/body/UpperBody.svg"
import core from "../images/body/Core.svg"
import legs from "../images/body/Legs.svg"
import upperBodyX from "../images/body/UpperBodyX.svg"
import coreX from "../images/body/CoreX.svg"
import legsX from "../images/body/LegsX.svg"

const fullBodyPlan =
    [
        {
            "bodyPart": "cardio",
            "equipment": "body weight",
            "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/3224.gif",
            "id": "3224",
            "name": "jack jump (male)",
            "target": "cardiovascular system"
        },
        {
            "bodyPart": "cardio",
            "equipment": "body weight",
            "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/1160.gif",
            "id": "1160",
            "name": "burpee",
            "target": "cardiovascular system"
        },
        {
            "bodyPart": "cardio",
            "equipment": "body weight",
            "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/3360.gif",
            "id": "3360",
            "name": "bear crawl",
            "target": "cardiovascular system"
        },
        {
            "bodyPart": "cardio",
            "equipment": "body weight",
            "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/3220.gif",
            "id": "3220",
            "name": "astride jumps (male)",
            "target": "cardiovascular system"
        },
        {
            "bodyPart": "cardio",
            "equipment": "body weight",
            "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0630.gif",
            "id": "0630",
            "name": "mountain climber",
            "target": "cardiovascular system"
        },
          
        {
            "bodyPart": "cardio",
            "equipment": "body weight",
            "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/3672.gif",
            "id": "3672",
            "name": "back and forth step",
            "target": "cardiovascular system"
        },    
       
    ];

const upperBodyPlan =
    [
        {
            "bodyPart": "cardio",
            "equipment": "body weight",
            "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/1160.gif",
            "id": "1160",
            "name": "burpee",
            "target": "cardiovascular system"
          },
        {
            "bodyPart": "upper arms",
            "equipment": "body weight",
            "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0283.gif",
            "id": "0283",
            "name": "diamond push-up",
            "target": "triceps"
        },
        {
            "bodyPart": "upper arms",
            "equipment": "body weight",
            "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/1399.gif",
            "id": "1399",
            "name": "bench dip on floor",
            "target": "triceps"
            },
            {
            "bodyPart": "chest",
            "equipment": "body weight",
            "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0662.gif",
            "id": "0662",
            "name": "push-up",
            "target": "pectorals"
            },
            {
            "bodyPart": "chest",
            "equipment": "body weight",
            "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/1689.gif",
            "id": "1689",
            "name": "push and pull bodyweight",
            "target": "pectorals"
        },
        {
            "bodyPart": "back",
            "equipment": "body weight",
            "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/1365.gif",
            "id": "1365",
            "name": "upper back stretch",
            "target": "upper back"
        },
        {
            "bodyPart": "back",
            "equipment": "body weight",
            "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/1405.gif",
            "id": "1405",
            "name": "back pec stretch",
            "target": "lats"
        },
       
    ];

const corePlan =
[
    {
        "bodyPart": "waist",
        "equipment": "body weight",
        "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0687.gif",
        "id": "0687",
        "name": "russian twist",
        "target": "abs"
      },
      {
        "bodyPart": "waist",
        "equipment": "body weight",
        "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/3544.gif",
        "id": "3544",
        "name": "bodyweight incline side plank",
        "target": "abs"
      },
      {
        "bodyPart": "waist",
        "equipment": "body weight",
        "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0664.gif",
        "id": "0664",
        "name": "push-up to side plank",
        "target": "abs"
      },
      {
        "bodyPart": "waist",
        "equipment": "body weight",
        "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0464.gif",
        "id": "0464",
        "name": "front plank with twist",
        "target": "abs"
      },
      {
        "bodyPart": "waist",
        "equipment": "body weight",
        "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0872.gif",
        "id": "0872",
        "name": "reverse crunch",
        "target": "abs"
      },
      {
        "bodyPart": "waist",
        "equipment": "body weight",
        "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0003.gif",
        "id": "0003",
        "name": "air bike",
        "target": "abs"
      },
      {
        "bodyPart": "waist",
        "equipment": "body weight",
        "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0006.gif",
        "id": "0006",
        "name": "alternate heel touchers",
        "target": "abs"
      },

   
];

const legsPlan =
[
    {
        "bodyPart": "upper legs",
        "equipment": "body weight",
        "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/1460.gif",
        "id": "1460",
        "name": "walking lunge",
        "target": "glutes"
      },
      {
        "bodyPart": "upper legs",
        "equipment": "body weight",
        "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/3433.gif",
        "id": "3433",
        "name": "swimmer kicks v. 2 (male)",
        "target": "glutes"
      },
      {
        "bodyPart": "upper legs",
        "equipment": "body weight",
        "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/2368.gif",
        "id": "2368",
        "name": "split squats",
        "target": "quads"
      },
      {
        "bodyPart": "upper legs",
        "equipment": "body weight",
        "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0778.gif",
        "id": "0778",
        "name": "spider crawl push up",
        "target": "glutes"
      },
      {
        "bodyPart": "upper legs",
        "equipment": "body weight",
        "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/1587.gif",
        "id": "1587",
        "name": "seated wide angle pose sequence",
        "target": "hamstrings"
      },
      {
        "bodyPart": "upper legs",
        "equipment": "body weight",
        "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/1576.gif",
        "id": "1576",
        "name": "leg up hamstring stretch",
        "target": "hamstrings"
      }, 
      {
        "bodyPart": "upper legs",
        "equipment": "body weight",
        "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/1585.gif",
        "id": "1585",
        "name": "runners stretch",
        "target": "hamstrings"
      },
   
];

function WorkoutPicker({setExerciseList}) {

    const [bodyPart, setBodyPart] = useState(fullBodyPlan)
    const [UpperIsShown, setUpperIsShown] = useState(false);
    const [CoreIsShown, setCoreIsShown] = useState(false);
    const [LegsIsShown, setLegsIsShown] = useState(false);
    const [UpperIsSelected, setUpperIsSelected] = useState(false);
    const [CoreIsSelected, setCoreIsSelected] = useState(false);
    const [LegsIsSelected, setLegsIsSelected] = useState(false);
    const [bodyRegionName, setBodyRegionName] = useState("FULL BODY");
    // setExerciseList(fullBodyPlan)
    useEffect(() => { setExerciseList(fullBodyPlan) }, [])
    useEffect(() => { localStorage.setItem('workout builder list', JSON.stringify(bodyPart)) }, [bodyPart]);
    useEffect(() => { document.body.style.backgroundColor = 'white' }, [])
    useEffect(() => { document.body.style.backgroundImage = 'linear-gradient(0deg, rgba(0, 233, 255, 0) 23%, rgba(62, 240, 220, 0) 80%)' }, [])

    return (
        <div id="bodyPartPicker" className="text-center d-flex flex-column">
            <p id="selectText">Select the body area you would like to work out</p>

            <div id="figure">
                <img id="wholeBody" src={wholeBody} alt="whole body" />
                <img id="upperBody" src={upperBody} alt="upper body" onMouseEnter={() => setUpperIsShown(true)} onMouseLeave={() => setUpperIsShown(false)} onClick={() => { setExerciseList(upperBodyPlan); setBodyRegionName("UPPER BODY") }} onMouseUp={() => { setUpperIsSelected(true); setCoreIsSelected(false); setLegsIsSelected(false) }} />
                {UpperIsSelected && (<img id="upperBodyX" src={upperBodyX} alt="upper body" onClick={() => { setUpperIsSelected(false); setExerciseList(fullBodyPlan); setBodyRegionName("FULL BODY") }} />)}
                <img id="core" src={core} alt="core" onMouseEnter={() => setCoreIsShown(true)} onMouseLeave={() => setCoreIsShown(false)} onClick={() => { setExerciseList(corePlan); setBodyRegionName("CORE") }} onMouseUp={() => { setCoreIsSelected(true); setUpperIsSelected(false); setLegsIsSelected(false) }} />
                {CoreIsSelected && (<img id="coreX" src={coreX} alt="core" onClick={() => { setCoreIsSelected(false); setExerciseList(fullBodyPlan); setBodyRegionName("FULL BODY") }} />)}
                <img id="legs" src={legs} alt="legs" onMouseEnter={() => setLegsIsShown(true)} onMouseLeave={() => setLegsIsShown(false)} onClick={() => { setExerciseList(legsPlan); setBodyRegionName("LEGS") }} onMouseUp={() => { setLegsIsSelected(true); setUpperIsSelected(false); setCoreIsSelected(false) }} />
                {LegsIsSelected && (<img id="legsX" src={legsX} alt="legs" onClick={() => { setLegsIsSelected(false); setExerciseList(fullBodyPlan); setBodyRegionName("FULL BODY") }} />)}
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