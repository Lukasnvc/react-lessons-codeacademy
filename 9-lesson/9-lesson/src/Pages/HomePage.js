import React from "react";
import Toolbar from "../components/Toolbar/Toolbar";
import { getCars } from "../api/cars";
import { Link } from "react-router-dom";

const HomePage = () => {
  const cars = getCars();
  return (
    <div>
      <Toolbar />
      <h1>Home page</h1>
      <ul>
        {cars.map((car) => (
          <Link key={car.id} to={`/cars/${car.id}`}>
            <li key={car.id}>
              {car.make}, {car.model}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
