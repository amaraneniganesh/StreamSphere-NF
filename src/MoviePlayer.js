import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ArrowLeft, Sun, Moon, PartyPopper as Party } from "lucide-react";
import "./MoviePlayer.css";

const MoviePlayer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const movie = location.state?.movie;
  const [isDarkMode, setIsDarkMode] = useState(false); // Set default to false for lights on
  const [isPartyMode, setIsPartyMode] = useState(false);

  if (!movie) {
    return (
      <div className="player-container">
        <h1>Movie not found!</h1>
        <button onClick={() => navigate("/")} className="back-button">
          <ArrowLeft className="icon" /> Go Back
        </button>
      </div>
    );
  }

  const toggleLight = () => {
    setIsDarkMode(!isDarkMode);
  };

  const togglePartyMode = () => {
    setIsPartyMode(!isPartyMode);
  };

  return (
    <div className={`player-container ${isDarkMode ? "lights-off" : ""}`}>
      <div className="controls-container">
        <button onClick={() => navigate("/")} className="back-button">
          <ArrowLeft className="icon" />
          <span className="button-text">Back</span>
        </button>
        
        <button onClick={toggleLight} className="button-62">
          {isDarkMode ? <Sun className="icon" /> : <Moon className="icon" />}
          <span className="button-text">
            {isDarkMode ? "Lights On" : "Lights Off"}
          </span>
        </button>
        
        <button onClick={togglePartyMode} className="party-btn">
          <Party className="icon" />
          <span className="button-text">Party Mode</span>
        </button>
      </div>
      
      <h1>{movie.title.toUpperCase()}</h1>
      <h1>{movie.cast.hero} || {movie.cast.heroine} || {movie.cast.director}</h1>
      
      <div className={`video-container ${isPartyMode ? "party-effect" : ""}`}>
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
