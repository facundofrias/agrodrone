import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { faFacebookSquare, faInstagram } from "@fortawesome/free-brands-svg-icons"
import { useState } from "react";
import MenuOption from "../header/navbar/MenuOption";

const Footer = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSupportOpen, setIsSupportOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSupport = () => {
    setIsSupportOpen(!isSupportOpen);
  }

  const handleLinkClick = (link) => {
    console.log(`Clicked on ${link}`);
  };

  const menuItems = [
    { label: "Catalog", value: "catalog" },
    { label: "Training", value: "training" },
    { label: "About Us", value: "about" },
    { label: "Contact", value: "contact" }
  ];

  const supportItems = [
    { label: "Support", value: "support" },
    { label: "Shipping and payment", value: "shippingAndPayment" },
    { label: "Lending terms", value: "lendingTerms" },
    { label: "Return and exchange", value: "returnAndExchange" }
  ];

  return (
    <footer className="footer">
      <div className="footer__menu-and-support">
        <div className={`footer__menu ${isMenuOpen ? "open" : ""}`}>
          <button className="footer__menu-toggle" onClick={toggleMenu}>
            <span>Menu</span>
            {
              isMenuOpen ? (
                <FontAwesomeIcon className="footer__arrow" icon={faChevronUp} />
              ) : (
                <FontAwesomeIcon className="footer__arrow" icon={faChevronDown} />
              )
            }
          </button>
          {isMenuOpen && (
            <MenuOption 
              classMenuOption={"footer__menu-option-toggle"}
            />
          )}
        </div>
        <div className={`footer__menu ${isSupportOpen ? "open" : ""}`}>
          <button className="footer__menu-toggle" onClick={toggleSupport}>
            <span>Support</span>
            {
              isSupportOpen ? (
                <FontAwesomeIcon className="footer__arrow" icon={faChevronUp} />
              ) : (
                <FontAwesomeIcon className="footer__arrow" icon={faChevronDown} />
              )
            }
          </button>
          {isSupportOpen && (
            <ul className="footer__menu-list">
              {supportItems.map((item) => (
                <li
                  key={item.value}
                  className="footer__menu-item"
                  onClick={() => handleLinkClick(item.value)}
                >
                  {item.label}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <div className="footer__info">
        <span>Djipro</span>
        <span>st. Voskresenskaya 43b</span>
        <span>Dr_assistan@gmail.com</span>
        <span>+38 (067) 399 55 93</span>
      </div>
      <div className="footer__social-media">
        <FontAwesomeIcon className="footer__brand" icon={faFacebookSquare} />
        <FontAwesomeIcon className="footer__brand" icon={faInstagram} />
      </div>
    </footer>
  )
}

export default Footer;