import { mainColor, mainDarkColor } from "../consts/color";
export const getMainColor = (darkMode) => {
  return darkMode ? mainDarkColor : mainColor;
};
