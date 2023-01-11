import React from "react";
import "./ProductList.css";
import { useState } from "react";

const ProductsList = ({ arr }) => {
  const now = arr;
  const [newArr, setNewArr] = useState(now);

  const onRemove = (id) => {
    const newList = newArr.filter((item) => item.id !== id);
    setNewArr(newList);
  };

  return (
    <div className="container">
      {newArr.map((item) => (
        <div className="cards" key={item.id}>
          <img src={item.pic} alt="pic" />
          <span className="name">{item.name}</span>
          <h1 className="price">&euro;{item.price}</h1>
          <button onClick={() => onRemove(item.id)}>> Istrinti</button>
        </div>
      ))}
    </div>
  );
};

export default ProductsList;
