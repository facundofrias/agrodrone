import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const CustomSelect = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const options = [
    { value: "", label: "Select an option" },
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

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
          {options.map((option) => (
            <li
              key={option.value}
              className={`option ${selectedOption === option ? "selected" : ""}`}
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
