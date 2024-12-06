import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from './WhatsApp_Image_2024-12-05_at_22.45.51_bc5a497b-removebg-preview.png'; // Importing the image
import "./App.css";

const Navbar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    onSearch(term); // Pass the search term to the parent component
    navigate("/search"); // Navigate to the search results page
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
          placeholder="Search for a movie..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
    </nav>
  );
};

export default Navbar;
