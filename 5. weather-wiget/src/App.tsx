import { useState, useEffect } from 'react';
import './index.css';
import TimerComponent from './Components/TimerComponent';
import RenderError from './Components/RenderError';
import RenderLoading from './Components/RenderLoading';
import RenderWeather from './Components/RenderWeather';
import { Coords, WeatherData } from './types/types';

const KEY = 'f7def371145f43adbee94458250908';

function App() {
  const [city, setCity] = useState<string>('');
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [coords, setCoords] = useState<Coords | null>(null);

  useEffect(() => {
    if (!navigator.geolocation) {
      setError('Geolocation is not supported by your bwoser');
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setCoords({ latitude, longitude });
      },
      (err) => {
        console.error('Geolocation error', err.message);
        setError('Failed to get your location');
      },
    );
  }, []);

  useEffect(() => {
    const contoller = new AbortController();
    const signal = contoller.signal;

    if (!city.trim() && !coords) {
      setWeatherData(null);
      setError(null);
      return;
    }

    async function getData() {
      setLoading(true);
      try {
        const query = city.trim() ? city : `${coords?.latitude}, ${coords?.longitude}`;
        const res = await fetch(`http://api.weatherapi.com/v1/current.json?key=${KEY}&q=${query}`, {
          signal,
        });
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

    return () => {
      contoller.abort();
    };
  }, [city, coords]);

  return (
    <div className="app">
      <TimerComponent />
      <div className="container widget-container">
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

        {error && <RenderError error={error} />}
        {loading && !error && <RenderLoading />}
        {!loading && !error && weatherData && <RenderWeather weatherData={weatherData} />}
      </div>
    </div>
  );
}

export default App;
