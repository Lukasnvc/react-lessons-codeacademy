import React from "react";
import { useEffect, useState } from "react";
import { WeatherApi } from "../../api/Weather";
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
      Hello
      <div className="weatherCard">
        {weather && <WeatherCard weather={weather} />}
      </div>
    </div>
  );
};

export default HomePage;
