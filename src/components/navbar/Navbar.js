import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import droneIcon from '../../assets/img/icons/drone.png';
import { faScaleBalanced, faBox, faBars} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="navbar">  
      <div className="first-navbar-container"></div>
      <div className="second-navbar-container"></div>
      <div className="third-navbar-container"></div>
      <div className="navbar-menu">
        <div className="assistant-group-container">
          <a href=""><img className="drone-icon" src={droneIcon} alt="Drone icon" /></a>
          <a href=""><span className="assistant-group">Assisant gruop</span></a>
        </div>
        <div className="options-menu">
          <a href=""><FontAwesomeIcon icon={faScaleBalanced} /></a>
          <a href=""><FontAwesomeIcon icon={faBox} /></a>
          <a href=""><FontAwesomeIcon icon={faBars} /></a>
        </div>
        {showMenu && (
          <div className="mobile-menu">
            <a href="#">Home</a>
            <a href="#">Catalog</a>
            <a href="#">About us</a>
            <a href="#">Contact</a>
          </div>
        )}
      </div>
      <div className="drone-img-container"></div>
    </div>
  )
}

export default Navbar;