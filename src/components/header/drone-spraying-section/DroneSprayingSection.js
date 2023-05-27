import { useState, useEffect} from "react";
import DroneImage from "./DroneImage";

const DroneSprayingSection = () => {
  const [shouldHideDescription, setShouldHideDescription] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const navbarHeight = 1;

      if (scrollPosition >= navbarHeight) {
        setShouldHideDescription(true);
      } else {
        setShouldHideDescription(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  return (
    <div className={`drone-spraying-section${shouldHideDescription ? ' hide' : ''}`}>
      <DroneImage />
      <div className="drone-spraying-section__description">
        <h3 className="drone-spraying-section__title">Spraying fields with drones</h3>
        <ul className="drone-spraying-section__list">
          <li className="drone-spraying-section__item">Providing spraying services</li>
          <li className="drone-spraying-section__item">Sale of Agra quadcopters</li>
          <li className="drone-spraying-section__item">Warranty repair</li>
          <li className="drone-spraying-section__item">Service</li>
          <li className="drone-spraying-section__item">Teaching</li>
        </ul>
        <button className="btn-secondary">Choose a drone</button>
      </div>
    </div>
  );
};

export default DroneSprayingSection;
