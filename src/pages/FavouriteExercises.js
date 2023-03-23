import React, { useState, useEffect } from "react";
import "../styles/BuildWorkout.css";
import { Container } from "react-bootstrap";
import FavouritesDisplay from "../components/FavouritesDisplay";

const FavouriteExercises = ({ searchTerm, setSearchTerm, handleSubmit, exerciseResults, setExerciseResults, setExerciseList }) => {

    const [favouritesArray, setFavouritesArray] = useState([]);
  
    useEffect(() => { document.body.style.backgroundColor = 'white' }, []);

    useEffect(() => { document.body.style.backgroundImage = 'linear-gradient(0deg, rgba(0, 233, 255, 0) 23%, rgba(62, 240, 220, 0) 80%)' }, []);

    useEffect(() => {
        
        setFavouritesArray(JSON.parse(localStorage.getItem("fave exercises list")) || []);
    }, [])

        
         
    

    return (
        <div className="text-center">
            <h2 className="border">
                My Favourite Exercises
            </h2>

            <Container fluid>
                <FavouritesDisplay favouritesArray={favouritesArray}
                setFavouritesArray={setFavouritesArray} setExerciseList={setExerciseList}  />
            </Container>
            
        </div> 
    
  )
}

export default FavouriteExercises