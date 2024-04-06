import React, { useState, useEffect } from "react";

const RouteButton = ({ title }) => {
  const [isLocalStorageDataPresent, setIsLocalStorageDataPresent] = useState(false);

  useEffect(() => {
    const selectedItems = JSON.parse(localStorage.getItem("selectedItems"));
    setIsLocalStorageDataPresent(selectedItems && selectedItems.length > 0);

    // Agregar un event listener para que se actualice el estado cuando cambie el localStorage
    const handleStorageChange = () => {
      const updatedSelectedItems = JSON.parse(localStorage.getItem("selectedItems"));
      setIsLocalStorageDataPresent(updatedSelectedItems && updatedSelectedItems.length > 0);
    };

    window.addEventListener("storage", handleStorageChange);

    // Limpieza del event listener
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return (
    <button
      className={`mt-6 p-2 rounded-full cursor-pointer hover:text ${
        isLocalStorageDataPresent ? "bg-indigo-500 text-white" : "bg-gray-300 text-gray-500 cursor-not-allowed"
      }`}
      disabled={!isLocalStorageDataPresent}
    >
      {title}
    </button>
  );
};

export default RouteButton;
