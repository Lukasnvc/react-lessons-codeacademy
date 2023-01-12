import React from "react";
import { arr } from "./arr.js";
import { useState } from "react";

const FilterForm = () => {
  const [input, setInput] = useState("");
  const search = (e) => {
    const value = e.target.value;
    setInput(value);
  };

  const found = input.length
    ? arr.filter((fruit) => fruit.item.includes(input))
    : arr;

  return (
    <div>
      <div>
        <h1>Fruit List</h1>

        <label htmlFor="search"></label>

        <input type="text" name="search" onInput={search} />

        <ul>
          {found.map((item) => (
            <li key={item.item}>{item.item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FilterForm;
