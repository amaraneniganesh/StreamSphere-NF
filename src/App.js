import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import SearchResults from "./SearchResults";
import MoviePlayer from "./MoviePlayer";
import "./App.css";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <Router>
      <Navbar onSearch={handleSearch} />
      <Routes>
  <Route path="/" element={<Home searchTerm={searchTerm} />} />
  <Route path="/search" element={<SearchResults searchTerm={searchTerm} />} />
  <Route path="/movie/:title" element={<MoviePlayer />} />
</Routes>

    </Router>
  );
};

export default App;
