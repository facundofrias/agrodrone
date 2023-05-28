import { useState } from "react";
import imageAgrodrone1 from "../../../assets/img/carousel/1-agrodrone.jpg";
import imageAgrodrone2 from "../../../assets/img/carousel/2-agrodrone.jpg";
import imageAgrodrone3 from "../../../assets/img/carousel/3-agrodrone.jpg";


const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
    imageAgrodrone1,
    imageAgrodrone2,
    imageAgrodrone3
  ];

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? images.length - 1 : prevSlide - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
  };

  return (
    <div className="carousel">
      <div className="carousel__slide">
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel__slide-item ${index === currentSlide ? "active" : ""}`}
          >
          <button className="carousel__prev-button" onClick={handlePrevSlide}>
            &lt;
          </button>
          <button className="carousel__next-button" onClick={handleNextSlide}>
            &gt;
          </button>
            <img src={image} alt={`Slide ${index + 1}`} className="carousel__slide-image" />
            <div className="carousel__slide-caption">Text {index + 1}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
