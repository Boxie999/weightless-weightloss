import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import "../styles/BuildWorkout.css";
import exercises from "../exercises.json";
import { Stack, Container } from "react-bootstrap";
import SearchResults from "../components/SearchResults";
// import { searchOptions, retrieveApiData } from '../utils/retrieveApiData';


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
    // const [searchTerm, setSearchTerm] = useState(""); // This tracks and represents what the user will type into the search field

    // const [exerciseResults, setExerciseResults] = useState([]); // This tracks and represents the entire COLLECTION of search results DISPLAYED after the user search is submitted


    // const handleSubmit = async () => {

    //     if(searchTerm) {

    //         const exerciseApiResults = exercises;

    //         // This mimics the API call, and is the full array of exercises that is produced from the API call/request
    //         // USED THIS TO CONSERVE API CALL CREDITS
    //         //************************
    //         //await retrieveApiData("https://exercisedb.p.rapidapi.com/exercises", searchOptions)

    //         // The searchOptions contains the information that will authorise the API call during the search

    //         //***********************

    //         //console.log(exerciseSearchResults);

    //         // Now, we want to add actual search functionality, by filtering through the array of objects and grabbing all objects with values that correspond to the search term. The proviso is that they are all body weight exercises.

    //         const specificExerciseSearches = exerciseApiResults.filter((exercise) => (exercise.equipment.toLowerCase() === "body weight") 
    //         && (exercise.bodyPart.toLowerCase().includes(searchTerm)
    //         || exercise.equipment.toLowerCase().includes(searchTerm)
    //         || exercise.name.toLowerCase().includes(searchTerm)
    //         || exercise.target.toLowerCase().includes(searchTerm)
    //         )
    //         )

    //         // We want to ensure that, after the search result is submitted, the search field is cleared and the exerciseResult state value is set to the resulting data from the search.

    //         setSearchTerm("");

    //         setExerciseResults(specificExerciseSearches);

    //         //console.log(specificExerciseSearches);

    //     }
    // }

    return (
        <div className="text-center">
            <div id="exerciseSearch" className="input-group border rounded-pill rounded">
                <span className="input-group-text bg-transparent border-0">
                    <FontAwesomeIcon id="searchIcon" icon={faSearch} />
                </span>
                <input id="exerciseSearchInput" type="search"
                    value={searchTerm}
                    onChange={(event) => { setSearchTerm(event.target.value.toLowerCase()) }}
                    className="form-control border-0 bg-transparent" placeholder="Search exercises by 'body part', 'equipment' or 'muscle target'" aria-label="Search" aria-describedby="search-addon" />
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