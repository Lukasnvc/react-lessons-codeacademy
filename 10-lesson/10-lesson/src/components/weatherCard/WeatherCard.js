import "./weatherCard.scss";
import "@fontsource/roboto";
import { FaSnowflake, FaSun } from "react-icons/fa";

const WeatherCard = ({ weather }) => {
  const getWeatherIcon = (weathercode) => {
    switch (weathercode) {
      case 71:
        return {
          icon: <FaSnowflake color="#93D5F9" size={100} />,
        };
      default:
        return {
          icon: <FaSun color="#FDB813" size={100} />,
        };
    }
  };

  const weathercode = weather.daily.weathercode[0];
  const { icon } = getWeatherIcon(weathercode);

  return (
    <div className="card-wheather">
      <div className="weather-info">
        <p className="weather-time-zone">{weather.timezone}</p>
        <p className="weather-date">{new Date().toDateString()}</p>
        <p className="weather-temp">
          {weather.daily.temperature_2m_min[0]}
          {weather.daily_units.temperature_2m_max}-{" "}
          {weather.daily.temperature_2m_max[0]}
          {weather.daily_units.temperature_2m_max}
        </p>
        <p className="weather-wind-speed">
          {weather.daily.windspeed_10m_max[0]}
          {weather.daily_units.windspeed_10m_max}
        </p>
      </div>
      <div className="weather-icon">{icon}</div>
    </div>
  );
};

export default WeatherCard;
