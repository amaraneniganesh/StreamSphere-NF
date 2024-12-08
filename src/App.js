import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import SearchResults from "./SearchResults";
import SeriesPlayer from "./SeriesPlayer";
import Home from "./Home";
import MoviePlayer from "./MoviePlayer";

function App() {
  const [searchTerm, setSearchTerm] = React.useState("");

  return (
    <Router>
      <Navbar onSearch={setSearchTerm} />
      <Routes>
        <Route path="/" element={<Home searchTerm={searchTerm} />} />
        <Route path="/search" element={<SearchResults searchTerm={searchTerm} />} />
        <Route path="/series/:title" element={<SeriesPlayer />} />
        <Route path="/movie/:title" element={<MoviePlayer />} />
      </Routes>
    </Router>
  );
}

export default App;
