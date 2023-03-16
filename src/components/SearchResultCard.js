import { NavLink } from "react-router-dom";
import "../styles/SearchResultCard.css";
import testerGif from "../images/testerGif.gif"

function SearchResultCard() {
    return (
        <div className="card searchResultCard shadow p-3 mb-5 bg-white rounded border-0" style={{ width: '18rem' }}>
            <img className="card-img-top" src={testerGif} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">Archer Pull Up</h5>
                <p className="card-text">body part - target</p>
                <input className="exerciseCheck" type="checkbox" />
            </div>
        </div>
    );
}

export default SearchResultCard;