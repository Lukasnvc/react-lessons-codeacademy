import React from "react";

const MenuList = ({ customerType }) => {
  const arraySingle = [
    {
      name: "Sumustinis",
      price: 5,
    },
    {
      name: "Bulves su kopustais",
      price: 10,
    },
    {
      name: "Barsciai",
      price: 7,
    },
  ];

  const arrayCouple = [
    {
      name: "Kefyras",
      price: 3,
    },
    {
      name: "Cepelinai",
      price: 12,
    },
  ];
  const arrayFamily = [
    {
      name: "Cola",
      price: 3.5,
    },
    {
      name: "Pica",
      price: 15,
    },
  ];

  if (customerType === "single") {
    return (
      <ul>
        {arraySingle.map((item, index) => (
          <li key={index}>
            {item.name}
            <br />
            <span>&#36;{item.price}</span>
          </li>
        ))}
      </ul>
    );
  }
  if (customerType === "couple") {
    return (
      <ul>
        {arrayCouple.map((item, index) => (
          <li key={index}>
            {item.name}
            <br />
            <span>&#36;{item.price}</span>
          </li>
        ))}
      </ul>
    );
  }
  if (customerType === "family") {
    return (
      <ul>
        {arrayFamily.map((item, index) => (
          <li key={index}>
            {item.name}
            <br />
            <span>&#36;{item.price}</span>
          </li>
        ))}
      </ul>
    );
  }
};

export default MenuList;
