import React, { useState, useEffect } from 'react';
import './Cloud.css';

const Cloud = () => {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState('Tashkent');
  const [inputValue, setInputValue] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const API_KEY = 'c67e3943b1537eb384b2ac2193719538';

  const fetchWeather = (cityName) => {
    setLoading(true);
    setError(false);
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${API_KEY}`)
      .then((res) => {
        if (!res.ok) throw new Error();
        return res.json();
      })
      .then((data) => {
        setWeather(data);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchWeather(city);
  }, [city]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      setCity(inputValue);
      setInputValue('');
    }
  };

  return (
    <div className="cloud-container">
      <form className="search-form" onSubmit={handleSearch}>
        <input 
          type="text" 
          placeholder="Shaharni yozing va Enter bosing..." 
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit" style={{ display: 'none' }}>Qidirish</button>
      </form>

      {loading && <div className="cloud-loader">Yuklanmoqda...</div>}

      {error && <div className="error-msg">Shahar topilmadi. Qayta urinib ko'ring!</div>}

      {!loading && !error && weather && (
        <div className="weather-card">
          <div className="weather-header">
            <h1>{weather.name}</h1>
            <p>{weather.sys.country}</p>
          </div>
          
          <div className="weather-main">
            <img 
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`} 
              alt="icon" 
            />
            <h2 className="temp">{Math.round(weather.main.temp)}°C</h2>
            <p className="desc">{weather.weather[0].description}</p>
          </div>

          <div className="weather-stats">
            <div className="stat-item">
              <span>Namlik</span>
              <strong>{weather.main.humidity}%</strong>
            </div>
            <div className="stat-item">
              <span>Shamol</span>
              <strong>{weather.wind.speed} m/s</strong>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cloud;