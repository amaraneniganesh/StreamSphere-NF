import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./App.css";

const MoviePlayer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const movie = location.state?.movie;

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

  return (
    <div className="player-container">
      <a onClick={() => navigate("/")} className="back-button">
        Back to Home
      </a>
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
