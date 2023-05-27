import { useState, useEffect } from "react";
import advantageImage1 from "../../../assets/img/advantages/advantageImage1.png";
import advantageImage2 from "../../../assets/img/advantages/advantageImage2.png";
import advantageImage3 from "../../../assets/img/advantages/advantageImage3.png";


const AdvantagesSection = () => {
  const [advantages, setAdvantages] = useState([]);

  useEffect(() => {
    const fetchAdvantages = async () => {
      try {
        const response = await fetch("advantages.json");
        const data = await response.json();
        setAdvantages(data);
      } catch (error) {
        console.log("Error fetching advantages:", error);
      }
    }

    fetchAdvantages();
  }, []);

  const getImageUrl = (id) => {
    switch (id) {
      case 1:
        return advantageImage1;
      case 2:
        return advantageImage2;
      case 3:
        return advantageImage3;
      default:
        return "";
    }
  };

  return(
    <div className="advantages">
      <h3 className="advantages__title">The main advantages of agricultural drones:</h3>
      {
        advantages.map((advantage) => (
          <div key={advantage.id} className="advantage">
            <img className="advantage__image" src={getImageUrl(advantage.id)} alt="Advantage image" />
            <p className="advantage__description">{advantage.description}</p>
            <ul className="advantage__list">
              {
                advantage.advantageList.map((advantageItem) => (
                  <li key={advantageItem.id} className="advantage__item">{advantageItem.text}</li>
                ))
              }
            </ul>
          </div>
        ))
      }
    </div>
  );
}

export default AdvantagesSection;