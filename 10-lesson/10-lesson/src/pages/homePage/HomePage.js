import React from "react";
import { useEffect, useState } from "react";
import { WeatherApi } from "../../api/Weather";
import StyledComponent from "../../components/styleComponent/StyledComponent";
import WeatherCard from "../../components/weatherCard/WeatherCard";

const HomePage = () => {
  const [weather, setWeather] = useState(undefined);

  useEffect(() => {
    fetch(WeatherApi)
      .then((resp) => resp.json())
      .then((response) => {
        setWeather(response);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      TITULINIS
      <div className="weatherCard">
        {weather && <WeatherCard weather={weather} />}
      </div>
      <StyledComponent />
    </div>
  );
};

export default HomePage;
