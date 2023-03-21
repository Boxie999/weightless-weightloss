import { NavLink } from "react-router-dom";
import { Nav } from "react-bootstrap";
import "../styles/Header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import Logo from "../images/logo.svg"

function Header() {
    return (
            <nav className="navbar navbar-expand-lg navbar-light">
                <Nav.Link href="/">
                    <img id="Logo" src={Logo} alt="Weightless Weightloss" />
                </Nav.Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto">
                        <Nav.Link href="BuildWorkoutX">
                            <li className="nav-item">
                                <a className="nav-link myLink">CREATE WORKOUT</a>
                            </li>
                        </Nav.Link>
                        <Nav.Link href="FavouriteExercises">
                            <li className="nav-item">
                                <a className="nav-link myLink">FAVOURITES</a>
                            </li>
                        </Nav.Link>
                        <Nav.Link href="/">
                            <li className="nav-item">
                                <a className="nav-link myLink">HOME</a>
                            </li>
                        </Nav.Link>
                    </ul>
                </div>
            </nav>
    );
}

export default Header;