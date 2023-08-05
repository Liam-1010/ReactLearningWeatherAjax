import React, { useState } from "react";
import axios from "axios";

export default function Weather(props) {
  let [temperature, setTemperature] = useState(null);
  let [description, setDescription] = useState(null);
  let [humidity, setHumidity] = useState(null);
  let [wind, setWind] = useState(null);
  let [city, setCity] = useState(null);
  let [icon, setIcon] = useState(null);

  function searchHandler(e) {
    e.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3a94f3778290bfeee61278505dbbe51d&units=metric`;
    axios.get(url).then(showTemperature);
  }

  function inputHandler(e) {
    setCity(e.target.value);
  }

  function showTemperature(response) {
    setTemperature(response.data.main.temp);
    setHumidity(response.data.main.humidity);
    setWind(response.data.wind.speed);
    setDescription(response.data.weather[0].description);
    setIcon(
      `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
  }

  let weatherContent = (
    <ul>
      <li>Temperature : {Math.round(temperature)} °C </li>
      <li>Description : {description} </li>
      <li>Humidity : {humidity}% </li>
      <li>Wind : {wind} km/h</li>
      <li>
        <img alt="{description}" src={icon} />
      </li>
    </ul>
  );

  if (city && temperature) {
    return (
      <div>
        <form onSubmit={searchHandler} id="search-form">
          <input
            type="search"
            onChange={inputHandler}
            placeholder="Enter a city"
            id="city-input"
          />
          <input type="submit" value="Search" />
        </form>

        <p>
          The temperature in {city} is currently {temperature}{" "}
        </p>
        {weatherContent}
      </div>
    );
  } else {
    return (
      <div>
        <form onSubmit={searchHandler} id="search-form">
          <input
            type="search"
            onChange={inputHandler}
            placeholder="Enter a city"
            id="city-input"
          />
          <input type="submit" value="Search" />
        </form>
      </div>
    );
  }
}
