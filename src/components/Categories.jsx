import React, { useEffect, useState } from "react";
import Accordion from "./Accordion";
import { services } from "../utils/services";

// const servicesAPI =
//   "https://file.notion.so/f/f/1d7049f6-d896-4891-9b3a-dab7e77463f3/82e9ddf2-b6c7-4b8c-a713-e3aa18f730bd/services.txt?id=ce88ba7b-719e-4802-b119-6ac0402e6d2c&table=block&spaceId=1d7049f6-d896-4891-9b3a-dab7e77463f3&expirationTimestamp=1712304000000&signature=lk358ObSUbTOj7wWTCw7zeKUznVlHmRtvfFrYO-EHEU&downloadName=services.txt";

const Categories = () => {
  // const [services, setServices] = useState([]);

  // useEffect(() => {
  //   fetch(servicesAPI)
  //     .then((res) => res.json())
  //     .then((data) => setServices(data.services));
  // }, []);

  return (
    <div className="p-4 bg-gray-200 rounded-lg">
      <h2 className="text-xl font-bold">Categorias</h2>
      {services.map((service) => (
        <Accordion
          key={service.id}
          title={service.name}
          description={service.description}
        />
      ))}
    </div>
  );
};

export default Categories;
