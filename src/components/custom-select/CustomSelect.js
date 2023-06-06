import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const CustomSelect = ( { options = [] }) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const allOptions = [{ value: "", label: "Select an option" }, ...options];


  const handleOptionChange = (value) => {
    setSelectedOption(value);
    setIsOpen(false);
  };

  const toggleOptions = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="custom-select">
      <div className={`select-box ${isOpen ? "open" : ""}`} onClick={toggleOptions}>
        <div className="selected-option">
          {selectedOption ? selectedOption.label : "Select an option"}
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
};

export default CustomSelect;
