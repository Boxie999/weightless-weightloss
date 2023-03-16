import React, { useState } from 'react';
import { Container, Col, Row, Button, Card } from "react-bootstrap";
// import { searchOptions, retrieveApiData } from '../utils/retrieveApiData';
import ExerciseCard from './ExerciseCard';
import SearchResultCard from './SearchResultCard';
import exercises from "../exercises.json";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import WorkoutConfirm from '../pages/WorkoutConfirm';


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
    console.log(exerciseResults);

    // Settings object for the horizontal scrollbar

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    
    }

    // We want to be able to render the search results on the page when the user clicks "Search".

    // Following that, we also want to give the possibility of choosing exercise cards, so that we can track that information and use it to build the workout.

    // So we need to manage two states - one for the checked card data (id, as we need unique information), and the other to populate the workout list 

    const [checkedArray, setCheckedArray] = useState([]);

    const [workoutExercises, setWorkoutExercises] = useState([]);

    const handleSelect = (event) => {

        const checkedId = event.target.value;
        const isChecked = event.target.checked;
    
        if(isChecked) {
    
          // We want to add the ids of the checked exercises to the checkedArray
    
          setCheckedArray([...checkedArray, checkedId]);
    
        } else {
          // Any exercise that is unchecked will have its id removed from the checkedArray
    
          const filteredCheckedArray = checkedArray.filter((element) => element !== checkedId);
          setCheckedArray(filteredCheckedArray);
        }
    }

    console.log(checkedArray);

    const createWorkout = (event) => {

        // const result = checkedArray.map((chA) => (exercises.find(exercise => exercise.id === chA) || {}).name).filter(Boolean);
        // Map through the index of user-checked exercise ids first. For each element of that array, we want to perform a .find() operation on the exercises array of objects to find objects with matching ids. Lastly, we want to filter out from the array objects for which the condition is true. This will be our array of objects that we can then use to render 

        const result = checkedArray.map((chA) => (exercises.find(exercise => exercise.id === chA) || {})).filter(Boolean);


        console.log(result);



        // checkedArray.map((item) => {
    
        //   let result = exercises.find((exercise) => exercise.id === item);
    
        //   setWorkoutExercises([...workoutExercises, result]);
    
        //   console.log(workoutExercises);
    
        // })

        // for(let i = 0; i < checkedArray.length; i++) {
        //    let result = exercises.find((exercise) => exercise.id === checkedArray[i]);
        //     setWorkoutExercises([...workoutExercises, result])
        // }

        // console.log(workoutExercises)

        // const test = checkedArray.map((eachId) => {
        //     const matchedUpExercises = exercises.find((exercise) => {
        //         return exercise.id === eachId
        //     })
        //     return matchedUpExercises;
        // })
        // const result = test.filter(Boolean).map((element) => {
        //     return element.name
        //})
        
    }  

  return (
    
    <Container fluid id="searchResults" style={{marginTop: "40px", padding: "15px"}}>
      <p>Exercise Results</p>
        <Container fluid>
        
            <Slider {...settings}>

                {exerciseResults.map((exercise, index) => (

                    <Col key={`exercise ${exercise.id} ${index}`}>

                    
                        <SearchResultCard  
                        exercise={exercise}
                        handleSelect={handleSelect} />
                    
                    
                    </Col>                                  
                        
                ))}
                
            </Slider>      

        </Container>
        <br /><br />

        <button className="btn btn-primary border-0 btn-lg chooseButton text-center" href="#" type="button" onClick={createWorkout}>START WORKOUT</button>

        <WorkoutConfirm 
      checkedArray={checkedArray}
      workoutExercises={workoutExercises}
        />
      
    </Container>
  )
}

export default SearchResults