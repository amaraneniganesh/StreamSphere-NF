import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";
import movies from "./movies.json";

const Home = ({ searchTerm }) => {
  const navigate = useNavigate();

  useEffect(() => {
    // Set dark mode by default
    document.body.classList.add('dark-mode');
  }, []);

  const handlePosterClick = (movie) => {
    navigate(`/movie/${encodeURIComponent(movie.title)}`, {
      state: { movie },
    });
  };

  const renderMovies = (filteredMovies) => {
    if (filteredMovies.length === 0) {
      return <p>No movies found in this category.</p>;
    }
    return filteredMovies.map((movie) => (
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
    ));
  };

  const sections = [
    {
      title: `Mahesh Babu Movies (${movies.filter((movie) => movie.cast.hero === "Mahesh Babu").length})`,
      filter: (movie) => movie.cast.hero === "Mahesh Babu",
    },
    {
      title: `Prabhas Movies (${movies.filter((movie) => movie.cast.hero === "Prabhas").length})`,
      filter: (movie) => movie.cast.hero === "Prabhas",
    },
    {
      title: `Telugu Dubbed / Foreign Movies (${movies.filter((movie) => movie.category === "Telugu Dubbed").length})`,
      filter: (movie) => movie.category === "Telugu Dubbed",
    },
    {
      title: `All Movies (${movies.length})`,
      filter: () => true,
    },
  ];

  return (
    <div>
      {sections.map((section) => (
        <div key={section.title}>
          <h2>{section.title}</h2>
          <div className="movie-gallery">{renderMovies(movies.filter(section.filter))}</div>
        </div>
      ))}
    </div>
  );
};

export default Home;
