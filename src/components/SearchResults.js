import React from 'react';
import { Container, Col } from "react-bootstrap";
// import { searchOptions, retrieveApiData } from '../utils/retrieveApiData';
import ExerciseCard from './ExerciseCard';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


// First writing functions to create custom arrows for the React Slick carousel we will display the search results in.

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "silver" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "silver" }}
        onClick={onClick}
      />
    );
}  

// Next, we will look to display the search results.
// This will be the component within which the search results will be displayed on the screen. It will display the collection of results, which we store/track within the exerciseResults state

// FIGURE OUT A WAY TO STOP IT REPEATING RESULTS WHEN THERE ARE FEWER THAN 4 RESULTS TO SHOW


const SearchResults = ( { exerciseResults, setExerciseResults }) => {
    //console.log(exerciseResults);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    
    }

  return (
    
    <Container fluid id="searchResults" style={{marginTop: "40px", padding: "15px"}}>
      <p>Showing Exercise Results</p>
      <br />
        <Container fluid>

        
            <Slider {...settings}>

                {exerciseResults.map((exercise, index) => (

                    <Col key={`exercise ${exercise.id} ${index}`}>

                    
                        <ExerciseCard  exercise={exercise} />
                    
                    
                    </Col>                                   
                        
                ))}
                
            </Slider>      

        </Container>
      
    </Container>
  )
}

export default SearchResults