import { NavLink } from "react-router-dom";
import "../styles/Header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'

function Header() {
    return (
        <nav>
            <p id="navLogo">SIMPLE<span className="fit">FIT.</span></p>
            <FontAwesomeIcon id="homeIcon" icon={faHouse} />
        </nav>
    );
}

export default Header;