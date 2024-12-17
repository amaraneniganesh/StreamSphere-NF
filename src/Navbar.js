import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from './logo2.png';
import "./App.css";

const Navbar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    onSearch(term);
    navigate("/search");
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </div>
      <div className="navbar-search">
        <input
          type="text"
          placeholder="Search for a movie or series..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
    </nav>
  );
};

export default Navbar;
