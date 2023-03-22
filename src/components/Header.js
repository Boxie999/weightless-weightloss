import { NavLink } from "react-router-dom";
import { Nav } from "react-bootstrap";
import "../styles/Header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import Logo from "../images/logo.svg"


import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
    return (
        <Navbar expand="lg">
            <Nav.Link href="/">
                <img id="Logo" src={Logo} alt="Weightless Weightloss" />
            </Nav.Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto text-center">
                    <Nav.Link href="BuildWorkoutX">
                        <li className="nav-item">
                            <p className="nav-link myLink">CREATE WORKOUT</p>
                        </li>
                    </Nav.Link>
                    <Nav.Link href="WorkoutPicker">
                        <li className="nav-item">
                            <p className="nav-link myLink"> QUICK WORKOUT</p>
                        </li>
                    </Nav.Link>
                    <Nav.Link href="FavouriteExercises">
                        <li className="nav-item">
                            <p className="nav-link myLink">FAVOURITES</p>
                        </li>
                    </Nav.Link>
                    <Nav.Link href="/">
                        <li className="nav-item">
                            <p className="nav-link myLink">HOME</p>
                        </li>
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>

        </Navbar>
    );
}

export default Header;