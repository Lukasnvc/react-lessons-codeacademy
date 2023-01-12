import React from "react";
import { arr } from "./arr.js";
import { useState } from "react";

const FilterForm = () => {
  const [fruits, setFruits] = useState(arr);
  const search = (e) => {
    const value = e.target.value;

    const found = fruits.filter((fruit) => fruit.item.includes(value));
    console.log(value, value.length, fruits, fruits.length);
    setFruits(found);
    value.length === 0 && setFruits(arr);
  };
  return (
    <div>
      <h1>Fruit List</h1>
      <label htmlFor="search"></label>
      <input type="text" name="search" onChange={search} />
      <ul>
        {fruits.map((item, index) => (
          <li key={index}>{item.item}</li>
        ))}
      </ul>
    </div>
  );
};

export default FilterForm;
