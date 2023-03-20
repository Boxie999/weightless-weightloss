import { NavLink } from "react-router-dom";
import { Nav } from "react-bootstrap";
import "../styles/Header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'

function Header() {
    return (
        <nav>
            <Nav.Link href="/">
            <p id="navLogo">WEIGHT<span className="fit">LESS.</span></p>
            </Nav.Link>

            <Nav.Link href="/">
            <FontAwesomeIcon id="homeIcon" icon={faHouse} />
            </Nav.Link>
        </nav>
    );
}

export default Header;