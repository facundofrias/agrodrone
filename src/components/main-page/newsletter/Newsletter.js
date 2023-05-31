import { useState, useEffect } from "react";
import imageNewsletter from "../../../assets/img/newsletter/image1.png";

const Newsletter = () => {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

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
    <div className="newsletter">
      {
        windowWidth > 768 && 
        <img src={imageNewsletter} alt="Drone image here" />
      }
      <div className="newsletter__form-container">
        <h3 className="newsletter__title">Be the first to know about new products and great discounts</h3>
        <form className="newsletter__form">
          <input className="newsletter__input" type="text" placeholder="Name" required />
          <input className="newsletter__input" type="email" placeholder="Email" required />
          <button className="newsletter__button btn-secondary" type="submit">Subscribe</button>
        </form>
        <p className="newsletter__reminder-news">* We will remind about ourselves no mora than once a week and only with good news</p>
      </div>
    </div>
  )
}

export default Newsletter;
