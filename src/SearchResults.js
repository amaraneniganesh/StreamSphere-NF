import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import moviesData from './movies.json'; // Assuming movies.json is in the src directory
import "./App.css";

const SearchResults = ({ searchTerm }) => {
  const navigate = useNavigate();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setMovies(moviesData); // Load the movies data when the component mounts
  }, []);

  const handlePosterClick = (movie) => {
    navigate(`/movie/${encodeURIComponent(movie.title)}`, {
      state: { movie },
    });
  };

  const filteredMovies = movies.filter((movie) => {
    if (!searchTerm) return true; // Show all movies if searchTerm is empty.

    const term = searchTerm.toLowerCase();

    // Safely access properties with optional chaining.
    const titleMatch = movie.title?.toLowerCase().includes(term);
    const genreMatch = movie.genre?.toLowerCase().includes(term);
    const heroMatch = movie.cast?.hero?.toLowerCase().includes(term);
    const heroineMatch = movie.cast?.heroine?.toLowerCase().includes(term);
    const directorMatch = movie.cast?.director?.toLowerCase().includes(term);

    return titleMatch || genreMatch || heroMatch || heroineMatch || directorMatch;
  });

  return (
    <div>
      {/* Top Navigation Bar */}
      <div className="top-bar">
        <br/>
        <button className="home-button" onClick={() => navigate("/")}>
          <span className="back-icon"></span> Home
        </button>
      </div>

      <h2>Search Results</h2>
      <div className="movie-gallery">
        {filteredMovies.length > 0 ? (
          filteredMovies.map((movie) => (
            <div
              key={movie.title}
              className="movie-item"
              onClick={() => handlePosterClick(movie)}
            >
              <div
                className="hover-image"
                style={{ backgroundImage: `url(${movie.hoverPoster || movie.poster})` }}
              ></div>
              <div className="poster-wrapper">
                <img src={movie.poster} alt={`${movie.title} Poster`} />
                <div className="poster-overlay">
                  <p className="poster-title">{movie.title}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No movies found.</p>
        )}
      </div>
    </div>
  );
};

export default SearchResults;
