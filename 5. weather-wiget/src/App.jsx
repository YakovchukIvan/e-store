import { useState, useEffect } from 'react';
import './index.css';

const KEY = 'f7def371145f43adbee94458250908';

function App() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getData() {
      setLoading(true);
      try {
        const res = await fetch(`http://api.weatherapi.com/v1/current.json?key=${KEY}&q=${city}`);
        const data = await res.json();

        if (data.error) {
          setError(data.error.message);
          setWeatherData(null);
          return;
        }

        setWeatherData(data);

        setError(null);
      } catch {
        setError('Failde to fetch weather data');
      } finally {
        setLoading(false);
      }
    }
    getData();
  }, [city]);

  const renderError = () => {
    return <p>{error}</p>;
  };

  const renderLoading = () => {
    return <p>Loading ...</p>;
  };

  const renderWeather = () => {
    return (
      <div className="weather-card">
        <p>{weatherData?.location?.localtime}</p>
        <h2>
          {weatherData?.location?.name}, {weatherData?.location?.country}
        </h2>
        <img
          src={`https:${weatherData?.current?.condition?.icon}`}
          alt="icon"
          className="weather-icon"
        />
        <p className="temperature">{weatherData?.current?.temp_c}°C</p>
        <p className="condition">{weatherData?.current?.condition?.text}</p>
        <div className="weather-details">
          <p>Humidity: {weatherData?.current?.humidity}%</p>
          <p>Wind: {weatherData?.current?.wind_kph} km/h</p>
        </div>
      </div>
    );
  };

  return (
    <div className="app">
      <div className="widget-container">
        <div className="weather-card-container">
          <h1 className="app-title">Weather Widget</h1>

          <div className="search-container">
            <input
              value={city}
              onChange={(e) => setCity(e.target.value)}
              type="text"
              placeholder="Enter city name"
              className="search-input"
            />
          </div>
        </div>

        {error && renderError()}
        {loading && !error && renderLoading()}
        {!loading && !error && weatherData && renderWeather()}
      </div>
    </div>
  );
}

export default App;
