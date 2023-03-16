import React, { useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from "react-router-dom";
import "../styles/BuildWorkout.css";
import SearchResultCard from "../components/SearchResultCard";


function WorkoutPicker() {

    useEffect(() => { document.body.style.backgroundColor = 'white' }, [])
    useEffect(() => { document.body.style.backgroundImage = 'linear-gradient(0deg, rgba(0, 233, 255, 0) 23%, rgba(62, 240, 220, 0) 80%)' }, [])

    return (
        <div className="text-center">
            <div id="exerciseSearch" className="input-group border rounded-pill rounded">
                <span className="input-group-text bg-transparent border-0">
                    <FontAwesomeIcon id="searchIcon" icon={faSearch} />
                </span>
                <input id="exerciseSearchInput" type="search" className="form-control border-0 bg-transparent" placeholder="Search exercises by 'body part', 'equipment' or 'muscle target'" aria-label="Search" aria-describedby="search-addon" />
            </div>
        <div id="searchResults" class="row row-cols-1 row-cols-md-4 d-flex justify-content-center">
        <SearchResultCard></SearchResultCard>
        <SearchResultCard></SearchResultCard>
        <SearchResultCard></SearchResultCard>
        <SearchResultCard></SearchResultCard>
        <SearchResultCard></SearchResultCard>
        </div>
        <button className="btn btn-primary border-0 btn-lg chooseButton text-center" href="#" role="button">START WORKOUT</button>
        </div>
    );
}

export default WorkoutPicker;