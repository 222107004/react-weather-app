import React from "react";
import Formatteddate from "./Formatteddate";
import WeatherTemperature from "./WeatherTemperature";

export default function Weatherinfo(props) {
  return (
    <div className="Weatherinfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <Formatteddate date={props.data.date} />
        </li>
        <li>{props.data.description}</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <div className="d-inline-block">
            <img
              src={props.data.iconUrl}
              alt="MostlyCloudy"
              className="weather-icon"
            />
            <span className="temperature">
              <WeatherTemperature celcius={props.data.temperature} />
              </span>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind}km\h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
