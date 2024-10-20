import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="Weather-Forecast-day">Thur</div>

          <WeatherIcon code="01d" />
        </div>
      </div>
    </div>
  );
}
