import { NavLink } from "react-router-dom";
import { Nav } from "react-bootstrap";
import "../styles/Header.css";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faHouse } from '@fortawesome/free-solid-svg-icons'
import Logo from "../images/logo.svg"
// import { NavLink } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

// const navigate = useNavigate()

function Header() {
    return (
        <Navbar expand="lg">
            <NavLink to="/" >
                <img id="Logo" src={Logo} alt="Weightless Weightloss" />
            </NavLink>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto text-center">
                    <NavLink to="buildWorkoutx"  style={{textDecoration: "none"}}>
                        <li className="nav-item">
                            <p className="nav-link myLink">CREATE WORKOUT</p>
                        </li>
                    </NavLink>
                    <NavLink to="workoutpicker" style={{textDecoration: "none"}}>
                        <li className="nav-item">
                            <p className="nav-link myLink"> QUICK WORKOUT</p>
                        </li>
                    </NavLink>
                    <NavLink to="favouriteexercises" style={{textDecoration: "none"}}>
                        <li className="nav-item">
                            <p className="nav-link myLink">FAVOURITES</p>
                        </li>
                    </NavLink>
                    <NavLink to="/" style={{textDecoration: "none"}}>
                        <li className="nav-item">
                            <p className="nav-link myLink">HOME</p>
                        </li>
                    </NavLink>
                </Nav>
            </Navbar.Collapse>

        </Navbar>
    );
}

export default Header;