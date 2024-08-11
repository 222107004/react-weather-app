import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import { renderToStaticMarkup } from "react-dom/server";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  //Create a whole object for all weather data

  function handleResponse(response) {
    console.log(response.data);

    setWeatherData({
      ready: true,
      temperature: response.data.temperature.current,
      wind: response.data.wind.speed,
      city: response.data.city,
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
      date: "Wednesday 07:00",
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city"
                className="form-control"
                autoFocus
              />
            </div>
            <div className="col-3">
              <input type="submit" placeholder="required" className="button" />
            </div>
          </div>
        </form>
        <h1>{weatherData.city}</h1>
        <ul>
          <li>{weatherData.date}</li>
          <li>{weatherData.description}</li>
        </ul>
        <div className="row">
          <div className="col-6">
            <div className="d-inline-block">
              <img
                src={weatherData.iconUrl}
                alt="MostlyCloudy"
                className="weather-icon"
              />
              <span className="temperature">
                {Math.round(weatherData.temperature)}
              </span>
              <span className="unit">&deg;C</span>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {weatherData.wind}km\h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    let city = props.defaultCity;
    let apiKey = "b2a5adcct04b33178913oc335f405433";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
    return "Loading";
  }
}
