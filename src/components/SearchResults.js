import React, { useState } from 'react';
import { Container, Col } from "react-bootstrap";
import { searchOptions, retrieveApiData } from '../utils/retrieveApiData';
import SearchResultCard from './SearchResultCard';
import exercises from "../exercises.json";
import "../styles/SearchResults.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


// First writing functions to create custom arrows for the React Slick carousel we will display the search results in.

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "white" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "white" }}
      onClick={onClick}
    />
  );
}

// Next, we will look to display the search results.
// This will be the component within which the search results will be displayed on the screen. It will display the collection of results, which we store/track within the exerciseResults state which will be passed as props


const SearchResults = ({ exerciseResults }) => {

  console.log(exerciseResults); // Remember exerciseResults is the output search result from a user search

  // Settings object for the horizontal scrollbar

  const settings = {
    dots: false,
    infinite: false, // set to false to prevent duplicates on results less than slidesToShow
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1115,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 860,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]

  }
  const warning = () => {
    toast("Exercises added to Favourites.")
}
  // We want to be able to render the search results on the page when the user clicks "Search".

  // Following that, we also want to give the possibility of choosing exercise cards, so that we can track that information and use it to build the workout.

  // So we need to manage two states - one for the checked card data (id, as we need unique information), and the other to populate the workout list 

  const [checkedArray, setCheckedArray] = useState([]);

  const handleSelect = (event) => {

        const checkedId = event.target.value;
        const isChecked = event.target.checked;
    
        if(isChecked) {
    
          // We want to add the ids of the checked exercises to the checkedArray
              
          setCheckedArray([checkedId, ...checkedArray]);
    
        } else {
          // Any exercise that is unchecked will have its id removed from the checkedArray
    
          const filteredCheckedArray = checkedArray.filter((element) => element !== checkedId);
          
          setCheckedArray(filteredCheckedArray);
        }
    }

  console.log(checkedArray);

  const createWorkout = (event) => {


    // Map through the index of user-checked exercise ids first. For each element of that array, we want to perform a .find() operation on the exercises array of objects to find objects with matching ids. Lastly, we want to filter out from the array objects for which the condition is true. This will be our array of objects that we can then use to render 

    const workoutBuilderExercises = checkedArray.map((chArrId) => (exercises.find(exercise => exercise.id === chArrId) || {})).filter(Boolean);
    // const result = checkedArray.map((chA) => (exercises.find(exercise => exercise.id === chA) || {}).name).filter(Boolean);

    console.log(workoutBuilderExercises);

    // setWorkoutBuilderExercises([result]);

    // console.log(workoutBuilderExercises);

    window.localStorage.setItem("workout builder list", JSON.stringify(workoutBuilderExercises)); // Takes the workoutBuilderExercises and sets them in local storage. This allows for it to be accessible on other pages, as well as be set from other sources than just the search page.

        window.location.href = "/WorkoutList"; // Navigate to the Workout Confirm page which will list out the workout exercises that can be reviewed before starting the workout
        
    }  

    // To track the indexes of the checked boxes within the search results 

    // let indexesOfCheckedArray = checkedArray.map((id) => exerciseResults.findIndex((exercise) => exercise.id == id));

    // console.log(indexesOfCheckedArray);

    const addToFavourites = () => {

        if(checkedArray.length > 0) { // We only want the Add To Favourites button to work if there are user-specified exercises to work with

      // Firstly use the array of ids to get an array of exercise objects from the complete exercises list
      const addToFavesExercises = checkedArray.map((chArrId) => (exercises.find(exercise => exercise.id === chArrId) || {})).filter(Boolean);

      // Then call whatever is already logged as favourites in local storage - if there is anything there

      const stringifiedFaveExercises = window.localStorage.getItem("fave exercises list");

      let parsedFaveExercises;

      if (!stringifiedFaveExercises) {

        parsedFaveExercises = [];

      } else {

        parsedFaveExercises = JSON.parse(stringifiedFaveExercises);
      }
      
      // We map through the newly collated list of exercise objects for their ids

      let exerciseObjectIds = addToFavesExercises.map(exercise => exercise.id);

      // We will get our final list of faveExercises by joining/concatenating the new list of exercises chosen by the user  to what is already in local storage - AFTER ensuring that any duplicates in local storage are filtered out. This keeps the most recently selected choice near the 'top' of the list.

      let faveExercises = addToFavesExercises.concat(parsedFaveExercises.filter(({ id }) => !exerciseObjectIds.includes(id)));
     

      // Then we stringify the new array of favourite exercises and set it back in local storage

      window.localStorage.setItem("fave exercises list", JSON.stringify(faveExercises));
        

            setCheckedArray([]); // Once the exercises have been added to Favourites, we want checkedArray to be cleared, so that previous choices do not persist within any subsequent operations

        warning();

            

        }
    }

  return (

    <Container fluid id="searchResults" style={{ marginTop: "40px", padding: "15px" }}>
      <p>{exerciseResults.length} Exercises Found</p>
      <Container fluid>

        <Slider {...settings}>

          {exerciseResults.map((exercise, index) => (

            <Col key={`exercise ${exercise.id} ${index}`}>


              <SearchResultCard
                exercise={exercise}
                handleSelect={handleSelect}
                checkedArray={checkedArray} />


            </Col>

          ))}

        </Slider>

      </Container>
      <br /><br />


      <button className="btn btn-primary border-0 btn-lg chooseButton text-center" href="#" type="button" onClick={createWorkout}>START WORKOUT</button>

      <button className="btn btn-primary border-0 btn-lg chooseButton text-center" href="#" type="button" onClick={addToFavourites}>ADD TO FAVOURITES</button>

<ToastContainer></ToastContainer>
    </Container>
  )
}

export default SearchResults