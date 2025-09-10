import React, { useState, useEffect } from "react";
import SearchIcon from "../assets/icons/MagnifyingGlass.svg";
import LocationIcon from "../assets/icons/MapPinLine.svg";

export default function Hero({ onSearch }) {
  const [position, setPosition] = useState("");
  const [location, setLocation] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  // Call onSearch automatically if both fields are empty (only once initially)
  useEffect(() => {
    if (!position && !location) {
      onSearch({ position: "", location: "" });
    }
  }, [position, location, onSearch]);

  const handleSearch = () => {
    if (isLoading) return;

    if (!position.trim() && !location.trim()) {
      setError("Please enter a position or location before searching.");

      setTimeout(() => {
        setError("");
      }, 4000);

      return;
    }

    setError("");
    setIsLoading(true);

    setTimeout(() => {
      if (onSearch) {
        onSearch({ position, location });
      }
      setIsLoading(false);
    }, 2000);
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

          <button
            className={`btn ${isLoading ? "loading-s" : ""}`}
            onClick={handleSearch}
          >
            Search
          </button>
        </div>

        {error && <p className="error-message">{error}</p>}
      </div>
    </section>
  );
}
