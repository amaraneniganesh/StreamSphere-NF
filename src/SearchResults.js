import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import moviesData from './movies.json';
import seriesData from './Series.json';
import "./App.css";

const SearchResults = ({ searchTerm }) => {
  const navigate = useNavigate();
  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);

  useEffect(() => {
    setMovies(moviesData);
    setSeries(seriesData);
  }, []);

  const handlePosterClick = (item, type) => {
    if (type === "movie") {
      navigate(`/movie/${encodeURIComponent(item.title)}`, { state: { movie: item } });
    } else {
      navigate(`/series/${encodeURIComponent(item.title)}`, { state: { serie: item } });
    }
  };

  const filteredResults = [
    ...movies.filter((movie) =>
      searchTerm ? movie.title?.toLowerCase().includes(searchTerm.toLowerCase()) : true
    ),
    ...series.filter((serie) =>
      searchTerm ? serie.title?.toLowerCase().includes(searchTerm.toLowerCase()) : true
    ),
  ];

  return (
    <div>
      <div className="top-bar">
        <br />
        <button className="home-button" onClick={() => navigate("/")}>
          <span className="back-icon"></span> Home
        </button>
      </div>

      <h2>Search Results</h2>
      <div className="movie-gallery">
        {filteredResults.length > 0 ? (
          filteredResults.map((item) => (
            <div
              key={item.title}
              className="movie-item"
              onClick={() => handlePosterClick(item, item.seasons ? "series" : "movie")}
            >
              <div
                className="hover-image"
                style={{ backgroundImage: `url(${item.hoverPoster || item.poster})` }}
              ></div>
              <div className="poster-wrapper">
                <img src={item.poster} alt={`${item.title} Poster`} />
                <div className="poster-overlay">
                  <p className="poster-title">{item.title}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No results found.</p>
        )}
      </div>
    </div>
  );
};

export default SearchResults;
