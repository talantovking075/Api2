import React, { useState, useEffect } from 'react';
import './Kino.css';

const Kino = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const API_KEY = 'c65fcde9';

  const fetchMovies = (search) => {
    if (!search.trim()) return;
    
    setLoading(true);
    setError("");

    const url = `https://www.omdbapi.com/?s=${search.trim()}&apikey=${API_KEY}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (data.Response === "True") {
          setMovies(data.Search);
          setError("");
        } else {
          setMovies([]);
          setError(data.Error);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Xatolik:", err);
        setError("Server bilan aloqa uzildi.");
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchMovies('Naruto');
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    fetchMovies(searchTerm);
  };

  return (
    <div className="kino-container">
      <div className="search-section">
        <form className="kino-search" onSubmit={handleSearch}>
          <input 
            type="text" 
            placeholder="Kino nomini yozing..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit" className="search-btn">Qidirish</button>
        </form>
      </div>

      {loading && <div className="loader-msg">Kinolar yuklanmoqda...</div>}

      {!loading && error && (
        <div className="error-box">
          <p>⚠️ {error}</p>
        </div>
      )}

      {!loading && !error && (
        <div className="kino-grid">
          {movies.map((movie) => (
            <div key={movie.imdbID} className="kino-card">
              <div className="poster-wrapper">
                <img 
                  src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/300x450?text=Rasm+Yo'q"} 
                  alt={movie.Title} 
                />
              </div>
              <div className="kino-info">
                <h3>{movie.Title}</h3>
                <div className="kino-meta">
                  <span>{movie.Year}</span>
                  <span className="type-tag">{movie.Type}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Kino;