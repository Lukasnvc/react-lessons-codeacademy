const cars = [
  { id: 1, make: "BMW", model: "X5", years: 2000, color: "black" },

  { id: 2, make: "Audi", model: "Q5", years: 2100, color: "red" },
];

export const getCars = () => {
  return cars;
};

export const getCar = (id) => {
  return cars.find((car) => car.id === id);
};
