import React from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

const movies = [
  {
    title: "Athadu",
    poster: "https://m.media-amazon.com/images/I/81TM1zCXjFL._AC_UF1000,1000_QL80_.jpg",
    hoverPoster: "https://upload.wikimedia.org/wikipedia/en/e/ee/Athadu_Poster.jpg",
    link: "https://drive.google.com/file/d/1EX5fup4Jj8fOBlexMOHrLixvSZeHqW5V/preview",
    cast: {
      hero: "Mahesh Babu",
      heroine: "Thrisha",
      director: "Trivikram",
    },
    genre: "Action",
  },
  {
    title: "Salaar",
    poster: "https://img.mensxp.com/media/content/2023/Dec/1---credit---Hombale-Films_6569c1f716608.jpeg?w=780&h=975&cc=1",
    hoverPoster: "https://m.media-amazon.com/images/M/MV5BYjc4ZmJkYmMtZDBjZi00MTYyLWIxNDctMTU2ODI3OWRiNTc5XkEyXkFqcGc@._V1_.jpg",
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
    hoverPoster: "https://upload.wikimedia.org/wikipedia/en/thumb/2/2b/Murari_poster.jpg/220px-Murari_poster.jpg",
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
    poster: "https://akm-img-a-in.tosshub.com/indiatoday/styles/medium_crop_simple/public/2023-10/snapinsta.app_391665603_18219672955247922_7844038987563802209_n_1080.jpg?VersionId=n3E7Bn3EUt37ext4BbKH.rahVstQduxt&size=750:*",
    hoverPoster: "https://img.mensxp.com/media/content/2023/Jul/hollywood-kalki-40_64ba7ade938c3.jpeg?w=720&h=1280&cc=1",
    link: "https://drive.google.com/file/d/1UI_S2QgaS1DZ7w1kqHAXESQiDkT1gqLq/preview",
    cast: {
      hero: "Amitabh, Prabhas",
      heroine: "Deepika",
      director: "Nag Ashwin",
    },
    genre: "Sci-Fi",
  },
  {
    title: "SVSC",
    poster: "https://m.media-amazon.com/images/S/pv-target-images/3b6ae28b92514bca96ea2105769eab125f93a7fdba9b78d3723dd6f9c3e7523a.jpg",
    hoverPoster: "https://m.media-amazon.com/images/M/MV5BMWJiZDVkODktZDM2ZS00NzE4LTlhOTEtYzRkYmYyODY4ZmQ2XkEyXkFqcGc@._V1_.jpg",
    link: "https://drive.google.com/file/d/1wV8tvJv3F_ryZ9ALERzWGbL9DXLFb5-i/preview",
    cast: {
      hero: "Mahesh Babu, Venkatesh",
      heroine: "Samantha, Anjali",
      director: "Sreekanth Addala",
    },
    genre: "Drama",
  },
  {
    title: "Guntur Kaaram",
    poster: "https://static.qobuz.com/images/covers/fc/2b/d1zxokurb2bfc_600.jpg",
    hoverPoster: "https://m.media-amazon.com/images/M/MV5BNTkwNDIwZDctNzQ5NC00OTcwLWIzMTEtNWM1MWRkMjg3OTYwXkEyXkFqcGc@._V1_.jpg",
    link: "https://drive.google.com/file/d/18K3Hs24z1ZyWPKZkf8SFoO0AmdKEqzDr/preview",
    cast: {
      hero: "Mahesh Babu, Venkatesh",
      heroine: "Samantha, Anjali",
      director: "Sreekanth Addala",
    },
    genre: "Drama",
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
            <div
              className="hover-image"
              style={{ backgroundImage: `url(${movie.hoverPoster})` }}
            ></div>
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
