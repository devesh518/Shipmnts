import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const API_KEY = "e310119a6995441ba3b61111232108"
  const [city, setCity] = useState("Surat");
  const [weather, setWeather] = useState();

  const getDetails = () => {
    fetch(
      `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`
    )
      .then((res) => res.json())
      .then((data) => setWeather(data))
      .catch((error) => console.log(error.message));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getDetails();
  }

  return (
    <>
      <div className="background" />
      <h1 className="">Search Weather</h1>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter city name"
            className=""
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button type="submit" className="">
            Search
          </button>
        </form>
      </div>
      {weather && (
        <div className="">
          <h4 className="">{weather.location.name}</h4>
          <img
            src={weather.current.condition.icon}
            alt=""
            className=""
          />
          <h2 className="">{weather.current.temp_c}&deg;</h2>
          <p>{weather.current.condition.text}</p>
        </div>
      )}
    </>
  );
}

export default App;