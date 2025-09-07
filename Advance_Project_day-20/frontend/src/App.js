import React, { useState, useEffect } from 'react';
import WeatherDisplay from './components/WeatherDisplay';
import MapDisplay from './components/MapDisplay';

const API_KEY = process.env.REACT_APP_OPENWEATHER_API_KEY;
const API_URL = 'https://api.openweathermap.org/data/2.5/weather';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [city, setCity] = useState('');

  const fetchWeather = async (params) => {
    setLoading(true);
    setError(null);
    setWeatherData(null);
    const queryString = new URLSearchParams({ ...params, appid: API_KEY, units: 'metric' }).toString();
    try {
      const response = await fetch(`${API_URL}?${queryString}`);
      if (!response.ok) throw new Error('City not found. Please try again.');
      const data = await response.json();
      setWeatherData(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        fetchWeather({ lat: latitude, lon: longitude });
      },
      (err) => {
        setError('Geolocation access denied. Please search for a city.');
        fetchWeather({ q: 'Delhi' }); // Default city if geolocation fails
      }
    );
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (city.trim()) {
      fetchWeather({ q: city });
      setCity('');
    }
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Weather Dashboard</h1>
        <form onSubmit={handleSearch} className="search-form">
          <input
            type="text"
            placeholder="Search for a city..."
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
      </header>

      <main className="main-content">
        {loading && <p className="message">Loading weather data...</p>}
        {error && <p className="message error">{error}</p>}
        {weatherData && (
          <div className="content-grid">
            <WeatherDisplay data={weatherData} />
            <MapDisplay coords={weatherData.coord} />
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
