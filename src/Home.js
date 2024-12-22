import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";
import movies from "./movies.json";
import series from "./Series.json";

const Home = () => {
  const navigate = useNavigate();
  const [seriesData, setSeriesData] = useState([]);

  useEffect(() => {
    document.body.classList.add('dark-mode');
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
