import React from "react";
import { useParams } from "react-router-dom";
import { getCar } from "../api/cars";
import Toolbar from "../components/Toolbar/Toolbar";

const CarPage = () => {
  const { id } = useParams();
  const car = getCar(Number(id));
  return (
    <div>
      <Toolbar />
      {car.make}, {car.model}
      <div>
        {car.color}, {car.years}
      </div>
    </div>
  );
};

export default CarPage;
