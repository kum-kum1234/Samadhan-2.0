import React from 'react';

const WeatherDisplay = ({ data }) => {
  const { name, main, weather, wind, sys } = data;
  const iconUrl = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;

  return (
    <div className="weather-display">
      <h2>{name}, {sys.country}</h2>
      <img src={iconUrl} alt={weather[0].description} className="weather-icon" />
      <div className="temperature">{Math.round(main.temp)}<span>°C</span></div>
      <div className="condition">{weather[0].description}</div>
      
      <div className="details-grid">
        <div className="detail-item">
          <strong>Feels Like</strong>
          <span>{Math.round(main.feels_like)}°C</span>
        </div>
        <div className="detail-item">
          <strong>Humidity</strong>
          <span>{main.humidity}%</span>
        </div>
        <div className="detail-item">
          <strong>Wind Speed</strong>
          <span>{wind.speed} m/s</span>
        </div>
        <div className="detail-item">
          <strong>Pressure</strong>
          <span>{main.pressure} hPa</span>
        </div>
      </div>
    </div>
  );
};

export default WeatherDisplay;
