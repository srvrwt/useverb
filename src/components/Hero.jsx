import React, { useState, useEffect } from "react";
import SearchIcon from "../assets/icons/MagnifyingGlass.svg";
import LocationIcon from "../assets/icons/MapPinLine.svg";

export default function Hero({ onSearch }) {
  const [position, setPosition] = useState("");
  const [location, setLocation] = useState("");

  // Call onSearch automatically if both fields are empty
  useEffect(() => {
    if (!position && !location) {
      onSearch({ position: "", location: "" });
    }
  }, [position, location, onSearch]);

  const handleSearch = () => {
    if (onSearch) {
      onSearch({ position, location });
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <section className="hero">
      <div className="container">
        <h1>
          Find your <span>new job</span> today
        </h1>
        <div className="search-bar">
          <div className="search-input">
            <img src={SearchIcon} alt="search" className="icon" />
            <input
              type="text"
              placeholder="What position are you looking for?"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
              onKeyDown={handleKeyDown}
            />
          </div>

          <div className="search-input">
            <img src={LocationIcon} alt="location" className="icon" />
            <input
              type="text"
              placeholder="Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              onKeyDown={handleKeyDown}
            />
          </div>

          <button className="btn" onClick={handleSearch}>
            Search
          </button>
        </div>
      </div>
    </section>
  );
}
