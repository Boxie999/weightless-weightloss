import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import "../styles/BuildWorkout.css";
import exercises from "../exercises.json";
import { Stack, Container } from "react-bootstrap";
import SearchResults from "../components/SearchResults";
import { searchOptions, retrieveApiData } from '../utils/retrieveApiData';


function BuildWorkoutX({ searchTerm, setSearchTerm, handleSubmit, exerciseResults, setExerciseResults }) {

    useEffect(() => { document.body.style.backgroundColor = 'white' }, []);

    useEffect(() => { document.body.style.backgroundImage = 'linear-gradient(0deg, rgba(0, 233, 255, 0) 23%, rgba(62, 240, 220, 0) 80%)' }, []);


    const [showText, setShowText] = useState(false);
    const onPress = () => setShowText(true);
    const ResultsContainer = () =>
        <Container fluid>
            <SearchResults
                exerciseResults={exerciseResults}
                setExerciseResults={setExerciseResults} />
        </Container>;
    

    return (
        <div className="text-center">
            <div id="exerciseSearch" className="input-group border rounded-pill rounded">
                <span className="input-group-text bg-transparent border-0">
                    <FontAwesomeIcon id="searchIcon" icon={faSearch} />
                </span>
                <input id="exerciseSearchInput" type="search"
                    value={searchTerm}
                    onChange={(event) => { setSearchTerm(event.target.value.toLowerCase()) }}
                    className="form-control border-0 bg-transparent" placeholder="Search exercises by body part or muscle target" aria-label="Search" aria-describedby="search-addon" />
                <div className="input-group-append">
                    <button id="searchButton" className="btn btn-outline-secondary border-0" type="button"
                        onClick={handleSubmit} onMouseUp={onPress}>SEARCH</button>
                </div>
            </div>
            {showText ? <ResultsContainer /> : null}
        </div>
    );
}

// div id="searchResults" class="row row-cols-1 row-cols-md-4 d-flex justify-content-center"

export default BuildWorkoutX;