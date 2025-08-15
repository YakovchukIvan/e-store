const RenderWeather = ({ weatherData }) => {
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
export default RenderWeather;
