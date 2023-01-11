import React from "react";
import Button from "../Button/Button";
import "./Product.css";
import { useState } from "react";

const Product = ({
  image,
  title,
  price,
  description,
  availability,
  category,
}) => {
  const [count, setCount] = useState(0);
  return (
    <div className="card">
      <img src={image} alt="pic" />
      <div className="aside">
        <div className="top">
          <h2 className="title">{title}</h2>
          <div className="arrow">&#8592;</div>
          <div className="arrow">&#8594;</div>
        </div>
        <h2 className="price">{price}&euro;</h2>
        <div className="forDesc">
          {description.map((item) => (
            <span className="description">{item}</span>
          ))}
        </div>
        <h3>
          Availability:
          <span className="availability"> {availability} in stock</span>
        </h3>
        <div className="bottom">
          <div className="count">
            <div
              onClick={() => count > 1 && setCount(count - 1)}
              className="btnCount">
              -
            </div>
            <div className="showCount">{count}</div>
            <div
              onClick={() => count < `${availability}` && setCount(count + 1)}
              className="btnCount">
              +
            </div>
          </div>
          <Button>add to cart</Button>
        </div>
        <h4 className="category">Category: {category}</h4>
      </div>
    </div>
  );
};

export default Product;
