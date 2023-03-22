
import React, { useRef, useState } from "react";
import ReactDOM from "react-dom";
import { CountdownCircleTimer } from "react-countdown-circle-timer"
import "../styles/WorkoutPage.css"
import "../styles/TimerCard.css"


const renderTime = ({ remainingTime }) => {
    if (remainingTime === 0) {
      return <div className="timer">Well done!</div>;
    }
  
    return (
      <div className="timer">        
        <div className="value">{remainingTime}</div>
      </div>
    );
};






  
function Timer({ remainingTime, key, setKey, exerciseInProgress, setExerciseInProgress, duration, setDuration, isPlaying, setIsPlaying, exerciseIndex, setExerciseIndex, setExerciseId, exerciseList }) {
    
      const exerciseColor = '#02dec4'
      const restColor = '#d10f08'
      const exerciseTrailColor = '#d0f7f3'
      const restTrailColor = '#949191'
      const firstLoad = useRef(true);
      console.log('exerciseprogress ' + exerciseInProgress ) 
    return (
      
      <div>
      
          <CountdownCircleTimer
            key={key}
            isPlaying={isPlaying}
            duration={duration}
            colors={exerciseInProgress ? exerciseColor : restColor}
            trailColor={exerciseInProgress ? exerciseTrailColor : restTrailColor}
            strokeWidth={15}
            strokeLinecap={'square'}
            size={130}
            onComplete={() => {
                
              if(exerciseInProgress === false) {

                    setExerciseInProgress(true);
                    setDuration(30);
                    setKey((prevKey) => prevKey + 1)
                    setExerciseIndex(exerciseIndex + 1)
                      //should indicate the color change for the next button here
                } else if (exerciseInProgress === true && exerciseIndex < exerciseList.length - 1) {
                    setExerciseInProgress(false);
                    setDuration(10);
                    
                    setKey((prevKey) => prevKey + 1);                   
                }

                if(exerciseIndex === exerciseList.length - 1 && exerciseInProgress === true) {
                    window.location.href = "/WorkoutFinish";
                }

            }}
          >
            {renderTime}
          </CountdownCircleTimer>
          </div>

        
        
        
        
      
    );
  }


export default Timer