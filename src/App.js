import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Weather defaultCity="New york" />
      <footer>
        This project is created by Thama Mabatha and is {""}
        <a href="https://github.com/222107004/react-weather-app">
          open sourced on github
        </a>
      </footer>
    </div>
  );
}
