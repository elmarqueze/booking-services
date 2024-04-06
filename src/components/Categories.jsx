// Categories.js
import React, { useState, useEffect } from "react";
import Accordion from "./Accordion";
import { services } from "../utils/services";
import RouteButton from "./RouteButton";

const Categories = () => {
  const [isLocalStorageDataPresent, setIsLocalStorageDataPresent] = useState(false);

  useEffect(() => {
    const selectedItems = JSON.parse(localStorage.getItem("selectedItems"));
    setIsLocalStorageDataPresent(selectedItems && selectedItems.length > 0);
  }, []);

  const handleSelectionChange = () => {
    const selectedItems = JSON.parse(localStorage.getItem("selectedItems"));
    setIsLocalStorageDataPresent(selectedItems && selectedItems.length > 0);
  };

  return (
    <div className="p-4 bg-gray-200 rounded-lg">
      <h2 className="text-xl font-bold">Categorias</h2>
      {services.map((service) => (
        <Accordion
          key={service.id}
          title={service.name}
          description={service.description}
          onSelectionChange={handleSelectionChange}
        />
      ))}
      <div className="flex flex-row justify-end">
        <RouteButton
          title="Siguiente"
          disabled={!isLocalStorageDataPresent}
        />
      </div>
    </div>
  );
};

export default Categories;
