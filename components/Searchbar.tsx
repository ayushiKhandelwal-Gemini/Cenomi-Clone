"use client";

import { useState } from "react";

const cities = [
  "All",
  "Buraidah",
  "Riyadh",
  "Dammam",
  "Jeddah",
  "Makkah",
  "Ta’if",
];

const malls = [
  "MALL OF ARABIA",
  "MAKKAH MALL",
  "JOURI MALL",
  "JEDDAH PARK",
  "HAIFAA MALL",
  "AZIZ MALL",
  "AL NOOR MALL",
];

export default function SearchBar() {
  const [cityOpen, setCityOpen] = useState(false);
  const [mallOpen, setMallOpen] = useState(false);

  const [selectedCity, setSelectedCity] = useState("City");
  const [selectedMall, setSelectedMall] = useState("Find a Mall");

  return (
    <section className="search-section">
      <div className="search-container">

        {/* City Dropdown */}
        <div className="select-wrapper">
          <div
            className="select-box"
            onClick={() => {
              setCityOpen(!cityOpen);
              setMallOpen(false);
            }}
          >
            {selectedCity}
            <span className={`arrow ${cityOpen ? "open" : ""}`}>⌄</span>
          </div>

          {cityOpen && (
            <div className="dropdown-menu">
              {cities.map((city) => (
                <div
                  key={city}
                  className="dropdown-item"
                  onClick={() => {
                    setSelectedCity(city);
                    setCityOpen(false);
                  }}
                >
                  {city}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Mall Dropdown */}
        <div className="select-wrapper">
          <div
            className="select-box"
            onClick={() => {
              setMallOpen(!mallOpen);
              setCityOpen(false);
            }}
          >
            {selectedMall}
            <span className={`arrow ${mallOpen ? "open" : ""}`}>⌄</span>
          </div>

          {mallOpen && (
            <div className="dropdown-menu">
              {malls.map((mall) => (
                <div
                  key={mall}
                  className="dropdown-item"
                  onClick={() => {
                    setSelectedMall(mall);
                    setMallOpen(false);
                  }}
                >
                  {mall}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Search Button */}
        <button className="search-btn">
          Search <span>→</span>
        </button>

      </div>
    </section>
  );
}
``