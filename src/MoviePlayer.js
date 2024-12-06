import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./App.css";

const MoviePlayer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const movie = location.state?.movie;
  const [isDarkMode, setIsDarkMode] = useState(false);

  if (!movie) {
    return (
      <div className="player-container">
        <h1>Movie not found!</h1>
        <a href="/" className="back-button">
          Go Back
        </a>
      </div>
    );
  }

  const toggleLight = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`player-container ${isDarkMode ? "lights-off" : ""}`}>
      <button onClick={() => navigate("/")} className="back-button">
        Back to Home
      </button>
      <button onClick={toggleLight} className="light-toggle-btn">
        {isDarkMode ? "Turn On Light" : "Turn Off Light"}
      </button>
      <div className="video-container">
        <h1>Playing: {movie.title}</h1>
        <iframe
          src={movie.link}
          width="800"
          height="450"
          allow="autoplay; fullscreen"
          title={movie.title}
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default MoviePlayer;
