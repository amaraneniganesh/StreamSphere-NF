import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";
import movies from "./movies.json";
import series from "./Series.json";

const Home = () => {
  const navigate = useNavigate();
  const [seriesData, setSeriesData] = useState([]);
  const [showMarquee, setShowMarquee] = useState(true);

  useEffect(() => {
    document.body.classList.add("dark-mode");
    setSeriesData(series);
  }, []);

  const handlePosterClick = (item, type) => {
    if (type === "movie") {
      navigate(`/movie/${encodeURIComponent(item.title)}`, { state: { movie: item } });
    } else if (type === "series") {
      navigate(`/series/${encodeURIComponent(item.title)}`, { state: { serie: item } });
    }
  };

  const renderItems = (items, type) => {
    if (items.length === 0) {
      return <p>No {type} found in this category!</p>;
    }
    return items.map((item) => (
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
    ));
  };

  const movieSections = [
    {
      title: `Mahesh Babu Movies (${movies.filter((movie) => movie.cast.hero === "Mahesh Babu").length})`,
      items: movies.filter((movie) => movie.cast.hero === "Mahesh Babu"),
      type: "movie",
    },
    {
      title: `Telugu Dubbed / Foreign Movies (${movies.filter((movie) => movie.category === "Telugu Dubbed").length})`,
      items: movies.filter((movie) => movie.category === "Telugu Dubbed"),
      type: "movie",
    },
    {
      title: `Hindi (${movies.filter((movie) => movie.category === "Hindi Version").length})`,
      items: movies.filter((movie) => movie.category === "Hindi Version"),
      type: "movie",
    },
    {
      title: `All Movies (${movies.length})`,
      items: movies,
      type: "movie",
    },
  ];

  const seriesSection = {
    title: `Series (${seriesData.length})`,
    items: seriesData,
    type: "series",
  };

  return (
    <div>
      <style>
        {`
          .marquee-container {
            position: relative;
            background-color: black;
            padding: 10px 15px;
            border-radius: 5px;
            margin: 10px 0;
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .marquee {
            font-size: 16px;
            font-weight: bold;
            color: red;
            margin: 0;
            flex-grow: 1;
            text-align: center;
          }
            .marquee1 {
            font-size: 16px;
            font-weight: bold;
            color: silver;
            margin: 0;
            flex-grow: 1;
            text-align: center;
          }
          .close-button {
            background-color: transparent;
            border: none;
            font-size: 24px; /* Medium-sized X */
            font-weight: bold;
            color: red;
            cursor: pointer;
            transition: color 0.2s ease-in-out, transform 0.2s ease-in-out;
          }
          .close-button:hover {
            color: #ffcccc;
            transform: scale(1.1); /* Slight scaling effect */
          }
        `}
      </style>

      {showMarquee && (
  <div className="marquee-container">
    <marquee className="marquee">
      <span className="marquee1">Welcome to StreamSphere! Latest Releases: Waltair Veerayya and Squid Game Season 2...</span>
      &nbsp;&nbsp;&nbsp;
      For copyright concerns, please email us at: 
      <a href="mailto:moviezvibe01@gmail.com" style={{ color: 'red', textDecoration: 'none' }}>
        moviezvibe01@gmail.com
      </a>
      . &nbsp;&nbsp; This application is created for educational purposes only and is non-profitable and non-commercial. 
      
    </marquee>
    <button className="close-button" onClick={() => setShowMarquee(false)}>
      &times;
    </button>
  </div>
)}




      {movieSections.map((section) => (
        <div key={section.title}>
          <h2>{section.title}</h2>
          <div className="movie-gallery">{renderItems(section.items, section.type)}</div>
        </div>
      ))}

      <div key={seriesSection.title}>
        <h2>{seriesSection.title}</h2>
        <div className="movie-gallery">
          {seriesSection.items.length === 0 ? (
            <p>No Series found in this category.</p>
          ) : (
            renderItems(seriesSection.items, "series")
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
