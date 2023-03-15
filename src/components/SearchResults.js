import React from 'react';
import { Container, Row, Col, Stack } from "react-bootstrap";
// import { searchOptions, retrieveApiData } from '../utils/retrieveApiData';
import ExerciseCard from './ExerciseCard';

// This will be the component within which the search results will be displayed on the screen. It will display the collection of results, which we store/track within the exerciseResults state

const SearchResults = ( { exerciseResults, setExerciseResults }) => {
    //console.log(exerciseResults);

  return (
    <Container id="searchResults" style={{marginTop: "40px", padding: "15px"}}>
      <p>Showing Exercise Results</p>
      <br />
      <Container>

        <Stack direction="horizontal">

            {exerciseResults.map((exercise, index) => (

            <Col>

            <Row style={{whiteSpace: "nowrap", display: "inline-block"}}>
                <ExerciseCard key={index} exercise={exercise} />
            </Row>
            
            </Col>                                   
                    
            ))}
        </Stack>


      </Container>
      
    </Container>
  )
}

export default SearchResults