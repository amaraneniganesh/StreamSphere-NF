import React from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

const movies = [
    {
      title: "Salaar",
      poster:
        "https://img.mensxp.com/media/content/2023/Dec/1---credit---Hombale-Films_6569c1f716608.jpeg?w=780&h=975&cc=1",
      link: "https://drive.google.com/file/d/1TBa7hQp_6GknwX9GnYTEdDnBLk8gb6oA/preview",
      cast: {
        hero: "Prabhas",
        heroine: "Shruti Haasan",
        director: "Prashanth Neel",
      },
      genre: "Action",
    },
    {
      title: "Murari",
      poster: "https://in.bmscdn.com/events/moviecard/ET00406082.jpg",
      link: "https://drive.google.com/file/d/1Iofw-fEX2XA-JaotRac6YjBZD45Jz2TH/preview",
      cast: {
        hero: "Mahesh Babu",
        heroine: "Kajal Aggarwal",
        director: "Krishna Vamsi",
      },
      genre: "Drama",
    },
    {
      title: "Kalki 2898AD",
      poster: "https://akm-img-a-in.tosshub.com/indiatoday/styles/medium_crop_simple/public/2023-10/snapinsta.app_391665603_18219672955247922_7844038987563802209_n_1080.jpg?VersionId=n3E7Bn3EUt37ext4BbKH.rahVstQduxt&size=750:*", // You can modify this URL if you want a different image
      link: "https://drive.google.com/file/d/1UI_S2QgaS1DZ7w1kqHAXESQiDkT1gqLq/preview",
      cast: {
        hero: "Prabhas",
        heroine: "Not available", // Add heroine name if available
        director: "Not available", // Add director's name if available
      },
      genre: "Sci-Fi",
    },
  ];
  
  // Add more movies here with cast details


const Home = ({ searchTerm }) => {
  const navigate = useNavigate();

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    movie.cast.hero.toLowerCase().includes(searchTerm.toLowerCase()) ||
    movie.cast.heroine.toLowerCase().includes(searchTerm.toLowerCase()) ||
    movie.cast.director.toLowerCase().includes(searchTerm.toLowerCase()) ||
    movie.genre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handlePosterClick = (movie) => {
    navigate(`/movie/${encodeURIComponent(movie.title)}`, {
      state: { movie },
    });
  };

  return (
    <div className="movie-gallery">
      {filteredMovies.length > 0 ? (
        filteredMovies.map((movie) => (
          <div
            key={movie.title}
            className="movie-item"
            onClick={() => handlePosterClick(movie)}
          >
            <div className="poster-wrapper">
              <img src={movie.poster} alt={`${movie.title} Poster`} />
              <div className="poster-overlay">
                <p className="poster-title">{movie.title}</p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>No movies found</p>
      )}
    </div>
  );
};

export default Home;
