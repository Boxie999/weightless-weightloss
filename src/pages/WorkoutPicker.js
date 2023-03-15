import React, { useEffect } from "react";

import { NavLink } from "react-router-dom";
import "../styles/WorkoutPicker.css"


function WorkoutPicker() {

    useEffect(() => { document.body.style.backgroundColor = 'white' }, [])
    useEffect(() => { document.body.style.backgroundImage = 'linear-gradient(0deg, rgba(0, 233, 255, 0) 23%, rgba(62, 240, 220, 0) 80%)' }, [])

    return (
        <div>
        <p>Temp</p>
        </div>
    );
}

export default WorkoutPicker;