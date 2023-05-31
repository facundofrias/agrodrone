import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faScaleBalanced, faBox, faBars} from "@fortawesome/free-solid-svg-icons";
import droneIcon from '../../../assets/img/icons/drone.png';
import DroneSprayingSection from "../drone-spraying-section/DroneSprayingSection";
import MenuOption from "./MenuOption";

import { useLocation } from 'react-router-dom';

const Navbar = () => {
  
  const [showMenu, setShowMenu] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const location = useLocation();

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
      <div className ="navbar">
        <div className="navbar__menu">
          <div className="first-divisor-container">
            { windowWidth < 768 && 
              <div className="assistant-group-container">
                <a href=""><img className="drone-icon" src={droneIcon} alt="Drone icon" /></a>
                <a href=""><span className="assistant-group">Assisant gruop</span></a>
              </div>
            }
            {
              windowWidth >= 768 &&
              <MenuOption
              classMenuOption="desktop-menu" />
            }
          </div>
          <div className="second-divisor-container">
            { windowWidth >= 768 && 
              <div className="assistant-group-container">
                <a href=""><img className="drone-icon" src={droneIcon} alt="Drone icon" /></a>
                <a href=""><span className="assistant-group">Assisant gruop</span></a>
              </div>
            }
          </div>
          <div className="third-divisor-container">
            <div className="options-menu">
              <a href=""><FontAwesomeIcon icon={faScaleBalanced} /></a>
              <a href=""><FontAwesomeIcon icon={faBox} /></a>
              <a className="hamburger-menu"><FontAwesomeIcon icon={faBars} onClick={toggleMenu}/></a>
              {showMenu && (
                <MenuOption
                classMenuOption="mobile-menu" />
              )}
            </div>
          </div>
        </div>
        {
          location.pathname == "/" &&
          <DroneSprayingSection />
        }
      </div>
  )
}

export default Navbar;