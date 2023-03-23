import React, { useState } from 'react';
import { Container, Col } from "react-bootstrap";
// import { searchOptions, retrieveApiData } from '../utils/retrieveApiData';
// import SearchResultCard from './SearchResultCard';
// import exercises from "../exercises.json";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
// import FavouriteExercises from '../pages/FavouriteExercises';
import FavouritesDisplayCard from './FavouritesDisplayCard';


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

// Next, we will look to display the favourite exercises.

// This will be the component within which the favourite exercises will be displayed on the screen. It will display the collection of results, which we store/track within the exerciseResults state which will be passed as props


const FavouritesDisplay = ( { favouritesArray, setFavouritesArray }) => {
    
    // console.log(favouritesArray); // To show the output from local storage

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

    const [checkedFaveArray, setCheckedFaveArray] = useState([]);

    
    const handleSelectFave = (event) => {

        const faveCheckedId = event.target.value;
        const faveIsChecked = event.target.checked;
    
        if(faveIsChecked) {
    
          // We want to add the ids of the checked exercises to the checkedFaveArray
    
          setCheckedFaveArray([faveCheckedId, ...checkedFaveArray]);
    
        } else {
          // Any exercise that is unchecked will have its id removed from the checkedArray
    
          const filteredFaveCheckedArray = checkedFaveArray.filter((element) => element !== faveCheckedId);

          // console.log(filteredFaveCheckedArray);

          setCheckedFaveArray(filteredFaveCheckedArray);
        }
    }

    
    // We can track the indexes within the favouritesArray of every exercise that is checked.

    let indexesOfCheckedFaveArray = [];
    
    checkedFaveArray.forEach((id) => {
      const indexToCheck = favouritesArray.findIndex((exercise) => exercise.id === id)
      if( indexToCheck !== -1) {

        indexesOfCheckedFaveArray.push(indexToCheck);

      }
      });

    // console.log(indexesOfCheckedFaveArray);

    // Function to create a workout directly from Favourites 

    const createWorkoutFromFave = () => {

        const faveWorkoutBuilderExercises = checkedFaveArray.map((fChArrId) => (exercises.find(exercise => exercise.id === fChArrId) || {})).filter(Boolean);

        // console.log(faveWorkoutBuilderExercises);

        window.localStorage.setItem("workout builder list", JSON.stringify(faveWorkoutBuilderExercises));

        window.location.href = "/WorkoutList";

    }

    // Function to clear all exercises on the Favourites page

    const clearAllFavourites = () => {

        window.localStorage.removeItem("fave exercises list");

        // console.log("setFavouritesArray", "150")

        setFavouritesArray([]);
    }

    // Function to delete checked exercises from the Favourites Page

    const deleteSingleFavourites = () => {

        // console.log(JSON.parse(window.localStorage.getItem("fave exercises list")));
        // console.log(favouritesArray);
        // console.log((JSON.parse(window.localStorage.getItem("fave exercises list"))).length);

        let splicedFavouritesArray = [...favouritesArray];

        for (const i of indexesOfCheckedFaveArray) {

            splicedFavouritesArray.splice(i, 1);
        }
        // console.log(splicedFavouritesArray);

        window.localStorage.setItem("fave exercises list", JSON.stringify(splicedFavouritesArray));

        // console.log(JSON.parse(localStorage.getItem("fave exercises list")));

        setCheckedFaveArray([]);

        // console.log("setFavouritesArray", "176")

        setFavouritesArray(splicedFavouritesArray);
        
    }



    return (
    
        <Container fluid id="searchResults" style={{marginTop: "40px", padding: "15px"}}>
          <p>{favouritesArray.length} Exercises in Favourites</p>
            <Container fluid>
            
                <Slider {...settings}>
    
                    {favouritesArray.map((exercise, index) => (
    
                        <Col key={`exercise ${exercise.id} ${index}`}>
    
                        
                            <FavouritesDisplayCard  
                            exercise={exercise}
                            handleSelectFave={handleSelectFave}
                            checkedFaveArray={checkedFaveArray} />
                        
                        
                        </Col>                                  
                            
                    ))}
                    
                </Slider>      
    
            </Container>
            <br /><br />
    
            
            <button className="btn btn-primary border-0 btn-lg chooseButton text-center" href="#" type="button" onClick={createWorkoutFromFave}>CREATE WORKOUT</button>

            <button className="btn btn-primary border-0 btn-lg chooseButton text-center" href="#" type="button" onClick={deleteSingleFavourites}>DELETE EXERCISES</button>
    
            <button className="btn btn-primary border-0 btn-lg chooseButton text-center" href="#" type="button" onClick={clearAllFavourites}>CLEAR ALL FAVOURITES</button>
            
          
        </Container>
      )


}

export default FavouritesDisplay