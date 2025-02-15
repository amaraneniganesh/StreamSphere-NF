import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Play, Info, AlertTriangle, Search, Film } from "lucide-react";
import "./App.css";
import movies from "./movies.json";
import series from "./Series.json";

const heroMovies = [
  {
    "title": "Guntur Kaaram",
    "description":"Years after his mother abandons him and remarries, a man demands answers when he's asked to sign a document denying he is her son as she runs for office.",
    "poster": "https://wallpaperaccess.com/full/12061901.jpg",
    "hoverPoster": "https://pbs.twimg.com/media/GDVX12rXUAA2Ruy?format=jpg&name=large",
    "link": "https://drive.google.com/file/d/18K3Hs24z1ZyWPKZkf8SFoO0AmdKEqzDr/preview",
    "cast": { "hero": "Mahesh Babu", "heroine": "Sreeleela", "director": "Trivikram" },
    "genre": "Drama"
  },
  {
    title: "Salaar",
    poster: "https://pbs.twimg.com/media/GAgQZOzW4AAaUfF?format=jpg&name=large",
    "description":"Just when the prince of Khansaar is about to rise to the throne, a plan of overthrowing him is exercised and only one man can help him retrieve power.",
    "hoverPoster":
      "https://moviegalleri.net/wp-content/gallery/salaar-hd-images/prabhas-salaar-hd-images-0db2d86.jpg",
    link: "https://drive.google.com/file/d/1TBa7hQp_6GknwX9GnYTEdDnBLk8gb6oA/preview",
    cast: {
      hero: "Prabhas",
      heroine: "Shruti Haasan",
      director: "Prashanth Neel",
    },
    genre: "Action",
  },
  {
    "title": "Spider-Man: No Way Home",
    "description":"With Spider-Man's identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear.",
    "poster": "https://m.media-amazon.com/images/M/MV5BMmFiZGZjMmEtMTA0Ni00MzA2LTljMTYtZGI2MGJmZWYzZTQ2XkEyXkFqcGc@._V1_.jpg",
    
    "hoverPoster": "https://wallpapers.com/images/featured/spider-man-no-way-home-pictures-l3ztimmzaeeqfgir.jpg",
    "link": "https://drive.google.com/file/d/1QurD9Fm0wlVsFi64wTlfv3xERMz1qt3a/preview",
    "cast": {
        "hero": "Tom Holland",
        "heroine": "Zendaya",
        "director": "Jon Watts"
    },
    "genre": "Comedy",
},
{
  "title": "Avatar The way of water",
  "description":"Jake Sully lives with his newfound family formed on the extrasolar moon Pandora. Once a familiar threat returns to finish what was previously started, Jake must work with Neytiri and the army of the Na'vi race to protect their home.",
  "poster": "https://m.media-amazon.com/images/M/MV5BNmQxNjZlZTctMWJiMC00NGMxLWJjNTctNTFiNjA1Njk3ZDQ5XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
  "hoverPoster": "https://m.media-amazon.com/images/S/pv-target-images/189420c3dbf235953dbb719a513f845fe8422135b1008eadc67b8356ee4d2751.jpg",
  "link": "https://drive.google.com/file/d/11b5AfwbJJ-ihs0sFsreBLhqzTIOYtVBY/preview",
  "cast": {
      "hero": "Sam Worthington",
      "heroine": "Zoe Saldana",
      "director": "James Cameron"
  },
  "genre": "Action, Fantasy, Thriller",
  "category": "Telugu Dubbed"
},
{
  "title": "Maharshi",
  "poster": "https://www.justwatch.com/images/poster/302449995/s718/maharshi.jpg",
  "description":"A story about Rishi and his quest for success in different stages of life from being a US-based businessman to being a champion for the poor downtrodden farmers.",
  "hoverPoster": "https://wallpaperaccess.com/full/5664421.jpg",
  "link": "https://drive.google.com/file/d/1_1x4mCroifEUjOpsMcS9FuZ-cDAlPy5f/preview",
  "cast": {
      "hero": "Mahesh Babu",
      "heroine": "Pooja Hegde",
      "director": "Vamshi Paidipally"
  },
  "genre": "Romance, Drama, Family Entertainer"
},
{
  "title": "The Dark Knight Rises",
  "description":"Bane, an imposing terrorist, attacks Gotham City and disrupts its eight-year-long period of peace. This forces Bruce Wayne to come out of hiding and don the cape and cowl of Batman again.",
  "poster": "https://m.media-amazon.com/images/M/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_FMjpg_UX1000_.jpg",
  "hoverPoster": "https://beam-images.warnermediacdn.com/BEAM_LWM_DELIVERABLES/6ce5965d-cdb2-4f9c-b22b-ae7a091d95a8/8999b17e-4b13-4d1e-a9c0-3cbd50d803a7?host=wbd-images.prod-vod.h264.io&partner=beamcom",
  "link": "https://iplayerhls.com/e/1fqp2kq52wcn",
  "cast": {
      "hero": "Christian Bale",
      "heroine": "Maggie Gyllenhaal",
      "director": "Christopher Nolan"
  },
  "genre": "Action/Thriller",
  "category": "Telugu Dubbed"
},

{
  "title": "Lucky Baskhar",
  "poster": "https://m.media-amazon.com/images/M/MV5BMjEzN2ZjYjUtZTI3NC00MzMyLWJiNDAtMDBiZGEzNTBiY2RkXkEyXkFqcGc@._V1_.jpg",
  "description":"A cash-strapped cashier working at a bank embarks on a risky investment scheme and soon gets drawn into the murky world of money laundering.",
  "hoverPoster": "https://www.bizzbuzz.news/h-upload/2024/11/14/1943306-lucky-bhaskar-censor-done-positive-inside-buzz-ahead-of-release-2.webp",
  "link": "https://drive.google.com/file/d/1qR5HfFEKT5voATQE_6g-GJ_TdHYEXnzG/preview",
  "cast": {
      "hero": "Dulquer Salmaan",
      "heroine": "Meenakshi Chaudhary",
      "director": "Venky Atluri"
  },
  "genre": "Drama, Thriller, Mystery"
},
];

const Home = () => {
  const navigate = useNavigate();
  const [seriesData, setSeriesData] = useState([]);
  const [showPopup, setShowPopup] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);

  useEffect(() => {
    document.body.classList.add("dark-mode");
    setSeriesData(series);

    const popupClosed = localStorage.getItem("popupClosed");
    if (popupClosed === "true") {
      setShowPopup(false);
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClosePopup = () => {
    setShowPopup(false);
    localStorage.setItem("popupClosed", "true");
  };

  const handleNextHero = () => {
    setCurrentHeroIndex((prevIndex) => (prevIndex + 1) % heroMovies.length);
  };

  const handlePlayClick = () => {
    const currentMovie = heroMovies[currentHeroIndex];
    navigate(`/movie/${encodeURIComponent(currentHeroIndex.title)}`, { state: { movie: currentMovie } });
  };

  useEffect(() => {
    const interval = setInterval(handleNextHero, 10000); // Change hero movie every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const handlePosterClick = (item, type) => {
    if (type === "movie") {
      navigate(`/movie/${encodeURIComponent(item.title)}`, { state: { movie: item } });
    } else if (type === "series") {
      navigate(`/series/${encodeURIComponent(item.title)}`, { state: { serie: item } });
    }
  };

  const filterContent = (items) => {
    return items.filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.cast?.hero?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.genre?.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const renderItems = (items, type) => {
    const filteredItems = filterContent(items);
    if (filteredItems.length === 0) {
      return <p>No {type} found matching your search.</p>;
    }
    return filteredItems.map((item) => (
      <div
        key={item.title}
        className="movie-item"
        onClick={() => handlePosterClick(item, item.seasons ? "series" : "movie")}
      >
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
      title: "Mahesh Babu Movies",
      items: movies.filter((movie) => movie.cast?.hero === "Mahesh Babu"),
      type: "movie",
    },
    {
      title: "Telugu Dubbed and Foreign Movies",
      items: movies.filter((movie) => movie.category === "Telugu Dubbed"),
      type: "movie",
    },
    {
      title: "Hindi Movies",
      items: movies.filter((movie) => movie.category === "Hindi Version"),
      type: "movie",
    },
    {
      title: "All Movies",
      items: [...movies].sort((a, b) => a.title.localeCompare(b.title)),
      type: "movie",
    },
  ];

  return (
    <div>
      <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
        <div className="navbar-left">
        <a href="/" className="logo">
  <span className="logo-full">StreamSphere</span>
  <span className="logo-mobile">SS</span>
</a>
        </div>
        <div className="navbar-right">
          <div className="search-container">
            <input
              type="text"
              className="search-input"
              placeholder="Search titles, actors..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="search-icon" size={20} />
          </div>
        </div>
      </nav>

      {showPopup && (
        <div className="popup-overlay">
          <div className="popup">
            <button className="popup-close" onClick={handleClosePopup}>
              ×
            </button>
            <div className="flex items-center justify-center mb-4">
              <AlertTriangle size={48} color="red" />
            </div>
            <p style={{ color: "red" }}>
              For copyright concerns, please email us at:{" "}
              <a href="mailto:moviezvibe01@gmail.com" style={{ color: "red" }}>
                moviezvibe01@gmail.com
              </a>
            </p>
            <p style={{ color: "red" }}>
              This application is created for educational purposes only.
            </p>
          </div>
        </div>
      )}

      <div 
        className="hero-section" 
        style={{ 
          backgroundImage: `url(${window.innerWidth > 768 ? heroMovies[currentHeroIndex].hoverPoster : heroMovies[currentHeroIndex].poster})`
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">{heroMovies[currentHeroIndex].title}</h1>
          <p className="hero-description">
            {heroMovies[currentHeroIndex].description}
          </p>
          <div className="hero-buttons">
            <button className="hero-button play-button" onClick={handlePlayClick}>
              <Play size={20} /> Play
            </button>
            <button className="hero-button more-info-button">
              <Info size={20} /> More Info
            </button>
          </div>
        </div>
      </div>

      <div className="content-section">
        {movieSections.map((section) => (
          <div key={section.title} className="row">
            <h2 className="section-title">{section.title}</h2>
            <div className="slider">{renderItems(section.items, section.type)}</div>
          </div>
        ))}

        <div className="row">
          <h2 className="section-title">Series</h2>
          <div className="slider">
            {seriesData.length === 0 ? (
              <p>No Series found in this category.</p>
            ) : (
              renderItems(seriesData, "series")
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;