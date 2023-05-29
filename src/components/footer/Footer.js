import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

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
    // Aquí puedes realizar acciones adicionales cuando se hace clic en un enlace
  };

  const menuItems = [
    { label: "Catalog", value: "catalog" },
    { label: "Training", value: "training" },
    { label: "About Us", value: "about" },
    { label: "Contact", value: "contact" },
  ];

  const supportItems = [
    { label: "Support", value: "support" },
    { label: "Shipping and payment", value: "shippingAndPayment" },
    { label: "Lending terms", value: "lendingTerms" },
    { label: "Return and exchange", value: "returnAndExchange" },
  ]
  return (
   <footer className="footer">
      <div className="footer__menu-support">
        <div className={`footer__menu ${isMenuOpen ? "open" : ""}`}>
          <button className="footer__menu-toggle" onClick={toggleMenu}>
            Menu
            {
              isMenuOpen ? (
                <FontAwesomeIcon className="footer__arrow" icon={faChevronUp} />
              ) : (
                <FontAwesomeIcon className="footer__arrow" icon={faChevronDown} />
              )
            }
          </button>
          {isMenuOpen && (
            <ul className="footer__menu-list">
              {menuItems.map((item) => (
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
        <div className={`footer__menu ${isSupportOpen ? "open" : ""}`}>
          <button className="footer__menu-toggle" onClick={toggleSupport}>
          Support
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
      <div className="footer__info"></div>
      <div className="footer__social-media"></div>
    </footer>
  )
}

export default Footer;