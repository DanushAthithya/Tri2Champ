import React, { useState } from "react";

const Dropdown = ({ options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div className="dropdown">
      <div
        className="dropdown-toggle"
        onClick={() => setIsOpen(!isOpen)}
        role="button"
        tabIndex="0"
      >
        {selectedOption ? selectedOption.label : "Select an option"}
        <i className={`fas fa-chevron-${isOpen ? "up" : "down"}`}></i>
      </div>
      {isOpen && (
        <ul className="dropdown-menu">
          {options.map((option) => (
            <li key={option.value}>
              <button onClick={() => handleOptionSelect(option)}>
                {option.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
