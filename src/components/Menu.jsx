import React from "react";
import coffeeImage from "../../public/coffee.png";

const Menu = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-500 to-blue-600">
      <button className="w-full flex gap-10 justify-center pb-20 relative pt-20 cursor-pointer">
      <div className="flex flex-col gap-2">
        <img
          src={coffeeImage}
          className="w-24 hover:scale-105 transition-transform duration-300 ease-in-out"
          alt="Reservar"
        ></img>
        <span className="text-md font-bold">Reservar</span>
      </div>
      <div className="flex flex-col gap-2">
        <img
          src={coffeeImage}
          className="w-24 hover:scale-105 transition-transform duration-300 ease-in-out"
          alt="Mis turnos"
        ></img>
        <span className="text-md font-bold">Mis turnos</span>
      </div>
    </button>
    </div>
  );
};

export default Menu;
