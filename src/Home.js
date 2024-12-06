import React from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

const movies = [
  {
    title: "Athadu",
    poster: "https://m.media-amazon.com/images/I/81TM1zCXjFL._AC_UF1000,1000_QL80_.jpg",
    hoverPoster: "https://image.ntnews.com/wp-content/uploads/2022/08/athadu-1_V_jpg--442x260-4g.webp?sw=412&dsz=442x260&iw=400&p=false&r=2.625",
    link: "https://drive.google.com/file/d/1EX5fup4Jj8fOBlexMOHrLixvSZeHqW5V/preview",
    cast: { hero: "Mahesh Babu", heroine: "Thrisha", director: "Trivikram" },
    genre: "Action",
  },
  {
    title: "Salaar",
    poster: "https://m.media-amazon.com/images/M/MV5BYjc4ZmJkYmMtZDBjZi00MTYyLWIxNDctMTU2ODI3OWRiNTc5XkEyXkFqcGc@._V1_.jpg",
    hoverPoster: "https://images.mid-day.com/images/images/2023/oct/salaar-prithvirajlook_d.jpg",
    link: "https://drive.google.com/file/d/1TBa7hQp_6GknwX9GnYTEdDnBLk8gb6oA/preview",
    cast: { hero: "Prabhas", heroine: "Shruti Haasan", director: "Prashanth Neel" },
    genre: "Action",
  },
  {
    title: "Murari",
    poster: "https://in.bmscdn.com/events/moviecard/ET00406082.jpg",
    hoverPoster: "https://sund-images.sunnxt.com/10491/1920x1080_616949f8-a462-4014-89bc-eed145b325fb.jpg",
    link: "https://drive.google.com/file/d/1Iofw-fEX2XA-JaotRac6YjBZD45Jz2TH/preview",
    cast: { hero: "Mahesh Babu", heroine: "Sonali Bendre", director: "Krishna Vamsi" },
    genre: "Drama",
  },
  {
    title: "Kalki 2898AD",
    poster: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202408/kalki-2898-ad-prabhas-part-2-shooting-30042599-3x4.jpeg?VersionId=md3vuSgiCkRcQjmBLe07a9fMIe2fuZiw",
    hoverPoster: "https://assets.aboutamazon.com/dims4/default/d501f43/2147483647/strip/true/crop/1279x720+1+0/resize/1240x698!/quality/90/?url=https%3A%2F%2Famazon-blogs-brightspot.s3.amazonaws.com%2F31%2F02%2Fabb957e9479e87b30bb1f22b22e1%2Fkalki-blog-post-1280x720.jpg",
    link: "https://drive.google.com/file/d/1UI_S2QgaS1DZ7w1kqHAXESQiDkT1gqLq/preview",
    cast: { hero: "Prabhas", heroine: "Deepika", director: "Nag Ashwin" },
    genre: "Sci-Fi",
  },
  {
    title: "SVSC",
    poster: "https://m.media-amazon.com/images/M/MV5BMWJiZDVkODktZDM2ZS00NzE4LTlhOTEtYzRkYmYyODY4ZmQ2XkEyXkFqcGc@._V1_.jpg",
    hoverPoster: "https://m.media-amazon.com/images/S/pv-target-images/d768148fc8d705135df70d1288031d34cdee462811f955d135f1749579c0a513._SX1080_FMjpg_.jpg",
    link: "https://drive.google.com/file/d/1wV8tvJv3F_ryZ9ALERzWGbL9DXLFb5-i/preview",
    cast: { hero: "Mahesh Babu, Venkatesh", heroine: "Samantha, Anjali", director: "Sreekanth Addala" },
    genre: "Drama",
  },
  {
    title: "Guntur Kaaram",
    poster: "https://static.qobuz.com/images/covers/fc/2b/d1zxokurb2bfc_600.jpg",
    hoverPoster: "https://gumlet.vikatan.com/vikatan/2024-01/f72b41ec-4f94-4195-858f-d467671efc97/guntur_kaaram__3_.jpg?w=1200&h=675&auto=format%2Ccompress&fit=max&enlarge=true",
    link: "https://drive.google.com/file/d/18K3Hs24z1ZyWPKZkf8SFoO0AmdKEqzDr/preview",
    cast: { hero: "Mahesh Babu", heroine: "Sreeleela", director: "Trivikram" },
    genre: "Drama",
  },
  {
    title: "Pokiri",
    poster: "https://m.media-amazon.com/images/M/MV5BYThhYzg2NjQtY2Q2NC00NTlmLWFmOGUtZTUwNzRiZTg1OGYxXkEyXkFqcGc@._V1_.jpg",
    hoverPoster: "https://www.newstap.in/h-upload/2022/08/07/1400288-superstar-mahesh-babu.webp",
    link: "https://drive.google.com/file/d/1pXBClMzij6OGtVM1XZf3wv7CNUGnENkt/preview",
    cast: { hero: "Mahesh Babu", heroine: "iliana", director: "puri" },
    genre: "Action, Drama, Thriller",
  },
  {
    title: "maharshi",
    poster: "https://www.justwatch.com/images/poster/302449995/s718/maharshi.jpg",
    hoverPoster: "https://data1.ibtimes.co.in/en/full/711876/maharshi.jpg",
    link: "https://drive.google.com/file/d/1_1x4mCroifEUjOpsMcS9FuZ-cDAlPy5f/preview",
    cast: { hero: "Mahesh Babu", heroine: "pooja hegde", director: "vamshi paidipally" },
    genre: "Romance, Drama, Family Entertainer",
  },
  {
    title: "Oppenheimer",
    poster: "https://upload.wikimedia.org/wikipedia/en/4/4a/Oppenheimer_%28film%29.jpg",
    hoverPoster: "https://www.showbiz411.com/wp-content/uploads/2022/12/oppenheimer.jpg",
    link: "https://drive.google.com/file/d/1DrCpUqyAh9ZPm-DB-yVtbn3NRWsR5xlW/preview",
    cast: { hero: "Cillian Murphy", heroine: "Emily Blunt", director: "Christopher Nolan" },
    genre: "Biography/Drama",
    category: "Telugu Dubbed",
  },
  {
    title: "The Dark Knight",
    poster: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
    hoverPoster: "https://rukminim2.flixcart.com/image/850/1000/kzzw5u80/poster/o/r/b/medium-joker-the-dark-knight-movie-on-fine-art-paper-hd-quality-original-imagbvmycjvpv5ph.jpeg?q=90&crop=false",
    link: "https://drive.google.com/file/d/1WiwihlsOsDtO3thYtZlunezbUKpX7LwA/preview",
    cast: { hero: "Christian Bale", heroine: "Maggie Gyllenhaal", director: "Christopher Nolan" },
    genre: "Action/Thriller",
    category: "Telugu Dubbed",
  },
  {
    title: "The Dark Knight Rises",
    poster: "https://m.media-amazon.com/images/M/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_FMjpg_UX1000_.jpg",
    hoverPoster: "https://beam-images.warnermediacdn.com/BEAM_LWM_DELIVERABLES/6ce5965d-cdb2-4f9c-b22b-ae7a091d95a8/8999b17e-4b13-4d1e-a9c0-3cbd50d803a7?host=wbd-images.prod-vod.h264.io&partner=beamcom",
    link: "https://drive.google.com/file/d/1WyP7K2Ux_a3ZX5sLOAmLTQmZkH9j4Lr7/preview",
    cast: { hero: "Christian Bale", heroine: "Maggie Gyllenhaal", director: "Christopher Nolan" },
    genre: "Action/Thriller",
    category: "Telugu Dubbed",
  },
  {
    title: "Darling",
    poster: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b7/Darling_%282010%29_poster.jpg/220px-Darling_%282010%29_poster.jpg",
    hoverPoster: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgw02B_onjT__52JphfsP5XBhdh0-_vpNQdP5-MEeVF04G9EkUXpvU7L1G8JCfBYTDF8SAk3dr8iA-_A6vNaftapqwXI30yfuI5ORZoHoTB2kIeLllvft1F3rZhYCrDXfWHxL0Ftc5hRbYx/w1200-h630-p-k-no-nu/darling.jpg",
    link: "https://drive.google.com/file/d/1JUcxwwO2Aw1d9_BkR_ZifXnjHCmiCNGJ/preview",
    cast: { hero: "Prabhas", heroine: "Kajal Aggarwal", director: "A. Karunakaran" },
    genre: "Romance, Drama",
  },  
  {
    title: "Okkadu",
    poster: "https://m.media-amazon.com/images/M/MV5BMTFmZTM1ODUtNzU5OC00ZDM0LTg2NGEtZjMyNzRhMDk5M2I4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    hoverPoster: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjq9XXGtH_qkesWrfI3pb7TqUUypE9w3OsG453-lTRx49JM-1DBVSvESnDpQVzt0dPQx5RmeKbTGrdsi4M6z62qABAQTf8ESlT8_OmVqPG_5sXViCZxogj7N8HR5EJBs-nRrVs5gSOJuOvV/s1600/mahesh-story_647_011517011356.jpg",
    link: "https://drive.google.com/file/d/1mc2l93BETSCuNxWal7aucZsBv4Ih7yEb/preview",
    cast: { hero: "Mahesh Babu", heroine: "Bhumika chawla", director: "guna shekar" },
    genre: "Romance, Drama, Action",
  },
  {
    title: "Pushpa The Rise",
    poster: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/pushpa--the-rise-et00129538-08-12-2021-01-21-46.jpg",
    hoverPoster: "https://d3lzcn6mbbadaf.cloudfront.net/media/details/ANI-20221129125434.jpg",
    link: "https://drive.google.com/file/d/1RiBaix1rfDTus0oBbMSO91fR-_b65zDA/preview",
    cast: { hero: "Allu Arjun", heroine: "Rashmika mandanna", director: "Sukumar" },
    genre: "Drama, Action",
  },
  {
    title: "1 - Nenokadine",
    poster: "https://m.media-amazon.com/images/S/pv-target-images/8a1a8002b2265386af2572cb69ddcfce7168b596d7ba4650dc016a5bfc0c4898.jpg",
    hoverPoster: "https://m.media-amazon.com/images/M/MV5BMTY5OTA1OTY4OV5BMl5BanBnXkFtZTgwODA1NzAwMTE@._V1_.jpg",
    link: "https://drive.google.com/file/d/1iPBokKWE2S-0Ei5w5hlo0E9roF7jc2mS/preview",
    cast: { hero: "Mahesh Babu", heroine: "kriti sanon", director: "Sukumar" },
    genre: "Drama, Action, thriller, mystery",
  },
  
];

const Home = ({ searchTerm }) => {
  const navigate = useNavigate();

  const handlePosterClick = (movie) => {
    navigate(`/movie/${encodeURIComponent(movie.title)}`, {
      state: { movie },
    });
  };

  const renderMovies = (filteredMovies) => {
    if (filteredMovies.length === 0) {
      return <p>No movies found in this category.</p>;
    }
    return filteredMovies.map((movie) => (
      <div
        key={movie.title}
        className="movie-item"
        onClick={() => handlePosterClick(movie)}
      >
        <div
          className="hover-image"
          style={{ backgroundImage: `url(${movie.hoverPoster || movie.poster})` }}
        ></div>
        <div className="poster-wrapper">
          <img src={movie.poster} alt={`${movie.title} Poster`} />
          <div className="poster-overlay">
            <p className="poster-title">{movie.title}</p>
          </div>
        </div>
      </div>
    ));
  };

  const sections = [
    {
      title: `Mahesh Babu Movies (${movies.filter((movie) => movie.cast.hero === "Mahesh Babu").length})`,
      filter: (movie) => movie.cast.hero === "Mahesh Babu",
    },
    {
      title: `Prabhas Movies (${movies.filter((movie) => movie.cast.hero === "Prabhas").length})`,
      filter: (movie) => movie.cast.hero === "Prabhas",
    },
    {
      title: `Telugu Dubbed / Foreign Movies (${movies.filter((movie) => movie.category === "Telugu Dubbed").length})`,
      filter: (movie) => movie.category === "Telugu Dubbed",
    },
    {
      title: `All Movies (${movies.length})`,
      filter: () => true,
    },
  ];
  

  return (
    <div>
      {sections.map((section) => (
        <div key={section.title}>
          <h2>{section.title}</h2>
          <div className="movie-gallery">{renderMovies(movies.filter(section.filter))}</div>
        </div>
      ))}
    </div>
  );
};

export default Home;