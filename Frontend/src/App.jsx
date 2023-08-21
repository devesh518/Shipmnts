import "./App.css";
import { useState } from "react";

function App() {
  const API_KEY = "e310119a6995441ba3b61111232108"
  const [city, setCity] = useState("Surat");
  const [weather, setWeather] = useState();

  const getDetails = () => {
    fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`)
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
      <div className="card shadow p-3 mb-5 bg-body-tertiary rounded" style={{ width: "25rem" }}>
        <div className="card-body">
          <h5 className="card-title">Search Weather</h5>
          <p className="card-text rounded">Write the name of the City/Pincode/Zip Code</p>
          <div className="form my-2 mx-2">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Enter city name"
                className="form-control mb-4"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
              <button type="submit" className="btn btn-primary mb-4">Show weather</button>
            </form>
            {/* The below part renders only when weather is not undefined */}
            {weather && (
              <div className="">
                <h4 className="">{weather.location.name}</h4>
                <img
                  src={weather.current.condition.icon}
                  alt="type of weather"/>
                <h2 className="">{weather.current.temp_c}&deg;</h2>
                <p>{weather.current.condition.text}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;