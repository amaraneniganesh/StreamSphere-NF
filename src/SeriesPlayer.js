import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./SeriesPlayer.css";

const SeriesPlayer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const series = location.state?.serie;

  const [selectedSeason, setSelectedSeason] = useState(series?.seasons[0]);
  const [selectedEpisode, setSelectedEpisode] = useState(selectedSeason?.episodes[0]);
  const [partyMode, setPartyMode] = useState(false); // State to toggle the animation

  if (!series) return <h1>Series not found! Please go back and try again.</h1>;

  const handleSeasonSelect = (season) => {
    setSelectedSeason(season);
    setSelectedEpisode(season.episodes[0]); // Reset to the first episode of the selected season
  };

  const handleEpisodeSelect = (episode) => setSelectedEpisode(episode);

  const handlePartyButtonClick = () => {
    setPartyMode((prevMode) => !prevMode); // Toggle party mode
  };

  return (
    <div className="series-container">
      <button onClick={() => navigate("/")} className="back-button">
        Back to Home
      </button>

      {/* Party Button */}
      <div className="party-button1" onClick={handlePartyButtonClick}>
        Party!
      </div>

      {/* Centered Series Title */}
      <div className="series-header">
        <h1>{series.title}</h1>
        <h2>{selectedEpisode ? `Episode ${selectedEpisode.episode}: ${selectedEpisode.title}` : ""}</h2>
      </div>

      {/* Dropdown for seasons */}
      <div className="dropdown-container">
        <label htmlFor="season-select" className="dropdown-label">
          Select Season:
        </label>
        <select
          id="season-select"
          className="dropdown-select"
          value={selectedSeason?.season}
          onChange={(e) =>
            handleSeasonSelect(series.seasons.find((s) => s.season === parseInt(e.target.value)))
          }
        >
          {series.seasons.map((season) => (
            <option key={season.season} value={season.season}>
              Season {season.season}
            </option>
          ))}
        </select>
      </div>

      {/* Dropdown for episodes */}
      <div className="dropdown-container">
        <label htmlFor="episode-select" className="dropdown-label">
          Select Episode:
        </label>
        <select
          id="episode-select"
          className="dropdown-select"
          value={selectedEpisode?.episode}
          onChange={(e) =>
            handleEpisodeSelect(
              selectedSeason.episodes.find((ep) => ep.episode === parseInt(e.target.value))
            )
          }
        >
          {selectedSeason.episodes.map((episode) => (
            <option key={episode.episode} value={episode.episode}>
              Episode {episode.episode}: {episode.title}
            </option>
          ))}
        </select>
      </div>

      {/* Video Player */}
      <div className={`video-container1 ${partyMode ? "party-mode" : ""}`}>
        {selectedEpisode ? (
          <iframe
            src={selectedEpisode.link}
            width="800"
            height="450"
            title={selectedEpisode.title}
            frameBorder="0"
            allowFullScreen
          ></iframe>
        ) : (
          <h2>Episode not available</h2>
        )}
      </div>
    </div>
  );
};

export default SeriesPlayer;