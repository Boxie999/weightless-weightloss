import React from 'react';
import { Container, Pagination, Stack, Row, Col } from "react-bootstrap";
import ExerciseCard from './ExerciseCard';

// This will be the component within which the search results will be displayed on the screen. It will display the collection of results, which we store/track within the exerciseResults state

const SearchResults = ( { exerciseResults, setExerciseResults }) => {
    console.log(exerciseResults);

  return (
    <Container id="searchResults" style={{marginTop: "40px", padding: "15px"}}>
      <p>Showing Exercise Results</p>
      <br />
      <Row>
        
        {exerciseResults.map((exercise, index) => (
          <Col>          
            <ExerciseCard key={index} exercise={exercise}/>            
          </Col>
          
        ))}
      
      </Row>
    </Container>
  )
}

export default SearchResults