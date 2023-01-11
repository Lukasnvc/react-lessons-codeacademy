import React from "react";
import { singleMenu, coupleMenu, familyMenu } from "./meniulist/const";

const MeniuList = ({ customerType }) => {
  const getCustomerType = (type) => {
    if (type === "single") {
      return singleMenu;
    } else if (type === "couple") {
      return coupleMenu;
    } else {
      return familyMenu;
    }
  };
  const customerMenu = getCustomerType(customerType);

  return (
    <ol>
      {customerMenu.map((menuItem) => (
        <li key={menuItem.itemName}>
          {menuItem.itemName} <strong>${menuItem.price}</strong>
        </li>
      ))}
    </ol>
  );
};

export default MeniuList;
