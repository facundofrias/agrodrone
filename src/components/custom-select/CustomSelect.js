import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const CustomSelect = ({ options = [], textToShow, asList = false, asRadio = false }) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  
  const allOptions = [{ value: "", label: textToShow }, ...options];

  const handleOptionChange = (value) => {
    setSelectedOption(value);
    // setIsOpen(false);
  };

  const toggleOptions = () => {
    setIsOpen(!isOpen);
  };

  if (asList) {
    return (
      <div className="custom-select">
        <div className={`select-box ${isOpen ? "open" : ""}`} onClick={toggleOptions}>
          <div className="selected-option">
            {textToShow}
          </div>
          {
            isOpen ? <FontAwesomeIcon icon={faChevronUp} /> 
              : <FontAwesomeIcon icon={faChevronDown} />
          }
        </div>
        {isOpen && (
          <ul className="options">
            {allOptions.map((option) => (
              <li
                key={option.value}
                className={`option${selectedOption === option ? " selected" : ""}`}
                onClick={() => handleOptionChange(option)}
              >
                {option.label}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }

  if (asRadio) {
    return (
      <div className="custom-select">
        <div className={`select-box ${isOpen ? "open" : ""}`} onClick={toggleOptions}>
          <div className="selected-option">
            {textToShow}
          </div>
          {
            isOpen ? <FontAwesomeIcon icon={faChevronUp} /> 
              : <FontAwesomeIcon icon={faChevronDown} />
          }
        </div>
        {isOpen && (
          <div className="options">
            {allOptions.map((option) => (
              <label key={option.value} className="option">
                <input
                  type="radio"
                  name="custom-select-radio"
                  value={option.value}
                  checked={selectedOption === option}
                  onChange={() => handleOptionChange(option)}
                  className="radio-checkbox-btn"
                />
                {option.label}
              </label>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="custom-select">
      <div className={`select-box ${isOpen ? "open" : ""}`} onClick={toggleOptions}>
        <div className="selected-option">
          {textToShow}
        </div>
        {
          isOpen ? <FontAwesomeIcon icon={faChevronUp} /> 
            : <FontAwesomeIcon icon={faChevronDown} />
        }
      </div>
      {isOpen && (
        <div className="options">
          {allOptions.map((option) => (
            <label key={option.value} className="option">
              <input
                type="checkbox"
                value={option.value}
                checked={selectedOption === option}
                onChange={() => handleCheckboxChange()}
                className="radio-checkbox-btn"
              />
              {option.label}
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomSelect;