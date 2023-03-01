import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import fetchWeather from "./fetchWeather";

function Weather() {
  const [weatherData, setWeatherData] = useState({});
  const [searchLocation, setSearchLocation] = useState("");

  const api = {
    url: "http://api.weatherapi.com/v1/forecast.json ",
    key: "e89a7c287ee24111bf0214444222412",
  };

  //set initial values of weather data
  useEffect(() => {
    fetchWeather(api.url, api.key, "paris", setWeatherData);
  }, [api.key, api.url, searchLocation]);

  //search city and set weather data
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeather(api.url, api.key, searchLocation, setWeatherData);
  };
  
  return (
    <div className="weather_container">
      {!weatherData.location && <p>Loading ...</p>}
      {weatherData.location && (
        <>
          <header className="search_weather">
            <form
              className="weather_search_form"
              onSubmit={(e) => handleSubmit(e)}
            >
              <label htmlFor="search"></label>
              <input
                placeholder="Search"
                id="search"
                className="search_bar"
                type="text"
                autoFocus
                required
                value={searchLocation}
                onChange={(e) => setSearchLocation(e.target.value)}
              />
              <button type="submit">
                <FaSearch className="search_icon" />
              </button>
            </form>
          </header>
          <main className="weather_infos">
            <p className="local_time">
              {new Date(weatherData.location.localtime).toLocaleString()}
            </p>
            <p className="location">
              {weatherData.location.name},{weatherData.location.country}
            </p>
            <p className="temp">{weatherData.current.temp_c} °C</p>
            <p className="description">
              {weatherData.current.condition.text}
              <span className="description_logo">
                <img
                  src={weatherData.current.condition.icon}
                  alt="weather_desctiption_logo"
                />
              </span>
            </p>
            <p className="humidity">
              humidity : {weatherData.current.humidity} %
            </p>
            <p className="wind">wind : {weatherData.current.wind_kph} km/h</p>
            <div className="forecast">
              {weatherData.forecast.forecastday[0].hour.map((fHour, index) => (
                <div className="forecast_elements" key={index}>
                  <p className="forecast_local_time">
                    {new Date(fHour.time).getUTCHours()}h
                  </p>

                  <p className="forecast_temp">{fHour.temp_c} °C</p>
                  <p className="forecast_description">
                    {fHour.condition.text}
                    <span className="forecast_description_logo">
                      <img
                        src={fHour.condition.icon}
                        alt="forecast_weather_desctiption_logo"
                      />
                    </span>
                  </p>
                  <p className="forecast_humidity">
                    humidity : {fHour.humidity} %
                  </p>
                  <p className="forecast_wind">wind : {fHour.wind_kph} km/h</p>
                </div>
              ))}
            </div>
          </main>
          <footer className="weather_footer">
            <p>CopyRight &copy; G.I</p>
          </footer>
        </>
      )}
    </div>
  );
}

export default Weather;
