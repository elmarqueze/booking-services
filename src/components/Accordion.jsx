import React, { useState, useEffect } from "react";

const Accordion = ({ title, description }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);
  const [isSelected, setIsSelected] = useState(false);

  // Load selected items from localStorage when mounting component
  useEffect(() => {
    const selectedItems =
      JSON.parse(localStorage.getItem("selectedItems")) || [];
    const isCurrentlySelected = selectedItems.some(
      (item) => item.title === title && item.description === description
    );
    setIsSelected(isCurrentlySelected);
  }, [title, description]);

  // Handle click on select button
  const handleSelectionToggle = () => {
    setIsSelected(!isSelected);
    updateSelectedItems(!isSelected);
  };

  // Update selected items in localStorage
  const updateSelectedItems = (isSelected) => {
    let selectedItems = JSON.parse(localStorage.getItem("selectedItems")) || [];

    if (isSelected) {
      selectedItems.push({ title, description });
    } else {
      selectedItems = selectedItems.filter(
        (item) => item.title !== title || item.description !== description
      );
    }

    localStorage.setItem("selectedItems", JSON.stringify(selectedItems));
  };

  return (
    <div className="py-2">
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className="flex justify-between w-full"
      >
        <span>{title}</span>
        <svg
          className="fill-indigo-500 shrink-0 ml-8"
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
              accordionOpen && "!rotate-180"
            }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              accordionOpen && "!rotate-180"
            }`}
          />
        </svg>
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden flex flex-col">
          {description}
          <button
            className={`w-full mt-3 p-2 rounded-full ${
              isSelected ? "bg-indigo-300" : "bg-indigo-500"
            } text-white cursor-pointer hover:text`}
            onClick={handleSelectionToggle}
          >
            {isSelected ? "Seleccionado" : "Seleccionar"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
