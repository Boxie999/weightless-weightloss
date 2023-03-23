
import React from "react";
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
      //colors based on if it's the exercise card or the rest card, the trail is changing color
      const exerciseColor = '#02dec4'
      const restColor = '#d10f08'
      const exerciseTrailColor = '#d0f7f3'
      const restTrailColor = '#949191'
      
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
                
              if(exerciseInProgress === false) { // when the exercise isn't running, ie. the rest page is showing, we want it to switch to the exercise page and set the duration to 30s.

                    setExerciseInProgress(true);
                    setDuration(30);
                    setKey((prevKey) => prevKey + 1) // the key represents cycles and revolutions of the timer
                    setExerciseIndex(exerciseIndex + 1)
                      
                } else if (exerciseInProgress === true && exerciseIndex < exerciseList.length - 1) { // when the exercise is running and we are not on the last element of the exercise list array, we want it to switch to the rest page and set the duration to 10s.
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