import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./App.css";

const SeriesPlayer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const series = location.state?.serie;

  const [selectedSeason, setSelectedSeason] = useState(series?.seasons[0]);
  const [selectedEpisode, setSelectedEpisode] = useState(selectedSeason?.episodes[0]);

  if (!series) return <h1>Series not found! Please go back and try again.</h1>;

  const handleSeasonSelect = (season) => {
    setSelectedSeason(season);
    setSelectedEpisode(season.episodes[0]);
  };

  const handleEpisodeSelect = (episode) => setSelectedEpisode(episode);

  return (
    <div className="series-container">
      <button onClick={() => navigate("/")} className="back-button">
        Back to Home
      </button>
      <h1>{series.title}</h1>
      <div className="season-list">
        {series.seasons.map((season) => (
          <div key={season.season}>
            <h2 onClick={() => handleSeasonSelect(season)}>Season {season.season}</h2>
            {selectedSeason?.season === season.season && (
              <ul>
                {season.episodes.map((episode) => (
                  <li key={episode.episode} onClick={() => handleEpisodeSelect(episode)}>
                    Episode {episode.episode}: {episode.title}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
      <div className="video-container">
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
