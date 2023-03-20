import { NavLink } from "react-router-dom";
import { Nav } from "react-bootstrap";
import "../styles/Header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import Logo from "../images/logo.svg"

function Header() {
    return (
        <nav>
            <Nav.Link href="/">
            <img id="Logo" src={Logo} alt="Weightless Weightloss" />
            </Nav.Link>

            <Nav.Link href="/">
            <FontAwesomeIcon id="homeIcon" icon={faHouse} />
            </Nav.Link>
        </nav>
    );
}

export default Header;