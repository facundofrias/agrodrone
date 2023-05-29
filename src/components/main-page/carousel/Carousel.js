import { useEffect, useState } from "react";
import { getCarousel } from "./getCarousel";
import Loader from "../../utils/loader/Loader";


const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [imagesCarousel, setImagesCarousel] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const carouselData = await getCarousel();
      setImagesCarousel(carouselData);
      setIsLoading(false);
    }

    fetchData();
    return () => clearTimeout(fetchData);
  }, [])

  const offers = [
    "5% off on your first purchase",
    "Buy now and receive a free accessory kit with your agrodron",
    "15% off on agrodrones priced over $3000"
  ]

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? imagesCarousel.length - 1 : prevSlide - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === imagesCarousel.length - 1 ? 0 : prevSlide + 1));
  };

  return (
    <>
      {
        isLoading ? (
          <div className="modal">
            <Loader />
          </div>
        ) : (
          <div className="carousel">
            <div className="carousel__slide">
              {imagesCarousel.map((image, index) => (
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
                  <img className="carousel__slide-image" src={image.imageUrl} alt={`Slide ${index + 1}`}/>
                  <div className="carousel__slide-caption">{offers[index]}</div>
                </div>
              ))}
            </div>
          </div>
        )
      }
    </>
  );
};

export default Carousel;
