import React from "react";
import "../styles/SearchResultCard.css";
import Row from 'react-bootstrap/Row';

function SearchResultCard( { exercise, handleSelect, checkedArray }) {

    return (
        <div className="card searchResultCard shadow p-3 mb-5 bg-white rounded border-0" style={{ width: '18rem' }}>
            <img className="card-img-top" src={exercise.gifUrl.replace("http://", "https://")|| ""} alt={exercise.name} />
            <div id="resultCard" className="card-body">
                <h5 className="card-title">{exercise.name}</h5>
                <p className="card-text">{exercise.bodyPart} - {exercise.target}</p>


                <Row style={{ alignItems: "center" }}>
                    <input
                        className="exerciseCheck"
                        checked={checkedArray.includes(exercise.id)}
                        type="checkbox"
                        value={exercise.id}
                        onChange={handleSelect} />
                </Row>
            </div>
        </div>
    );
}

export default SearchResultCard;