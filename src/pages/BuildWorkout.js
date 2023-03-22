import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Stack, Form, Button } from "react-bootstrap";
import exercises from "../exercises.json";
import SearchResults from '../components/SearchResults';

const BuildWorkout = () => {

    const [searchTerm, setSearchTerm] = useState(""); // This tracks and represents what the user will type into the search field
    const [exerciseResults, setExerciseResults] = useState([]); // This tracks and represents the entire COLLECTION of search results DISPLAYED after the search is submitted

    const handleSubmit = async () => {
        
            if(searchTerm) {
                const exerciseSearchResults = exercises;
    
                // This represents the exercises that are produced from the API call/request
                // USED THIS TO CONSERVE API CALL CREDITS
                //await retrieveApiData("https://exercisedb.p.rapidapi.com/exercises", searchOptions)
    
                // The searchOptions contains the information that will authorise the API call during the search
    
                //console.log(exerciseSearchResults);
    
                // Now, we want to add actual search functionality. Effectively we want to filter through the array of objects and grab all objects that have values which correspond to the search term. The proviso is that they are all body weight exercises.
    
                const specificExerciseSearches = exerciseSearchResults.filter((exercise) => (exercise.equipment.toLowerCase() === "body weight") 
                && (exercise.bodyPart.toLowerCase().includes(searchTerm)
                || exercise.equipment.toLowerCase().includes(searchTerm)
                || exercise.name.toLowerCase().includes(searchTerm)
                || exercise.target.toLowerCase().includes(searchTerm)
                )
                )
    
                // At this point, we now need to add the specificExerciseSearches variable to state, so that we can display them ==> useState([])
    
                // Once the useState has been created for the search result, we want to ensure that, after the search result is submitted, the search field is cleared and the exerciseResult state value is set to the resulting data from the search.
    
                setSearchTerm("");
    
                setExerciseResults(specificExerciseSearches);

                // console.log(specificExerciseSearches);
    
                // Next step is to display these specified results where they should be. The idea is to show all the exercises, as well as the body parts they target. So that the user can click on the body part "button" to light it up and whittle the results down further.
    
                // We will need a useEffect, so that we can get the categories rendered as well when the search information renders (?????)
            }
        }



    return (

        <Container>
                <h3 style={{marginTop: "50px", marginBottom: "25px", textAlign: "center"}}>
                    Search for Exercises
                </h3>
                <Container style={{marginTop: "50px", width: "800px"}}>
                
                    <Stack direction="horizontal" gap={3}>
                        <Form.Control className="me-auto" 
                        placeholder="Search Exercises by Body Part, Equipment or Muscle Target..."
                        value={searchTerm}
                        type="text"
                        onChange={(event) => {setSearchTerm(event.target.value.toLowerCase())}} />
                        <Button variant="danger" 
                        style={{width: "150px"}}
                        onClick={handleSubmit}
                        >Search
                        </Button>
                    </Stack>
                
                </Container>
                <SearchResults
                exerciseResults={exerciseResults}
                setExerciseResults={setExerciseResults} />
        </Container>
    )
}


export default BuildWorkout