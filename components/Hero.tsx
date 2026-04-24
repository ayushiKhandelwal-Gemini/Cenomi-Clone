"use client";

import { useEffect, useState } from "react";

const slides = [
  {
    image: "/v1.png",
    text: `CHECKOUT THE PREFERRED
SHOPPING DESTINATIONS
FOR VISITORS`,
  },
  {
    image: "/v2.png",
    text: `CENOMI CENTERS IS THE
KINGDOM’S LARGEST OWNER
AND OPERATOR OF MALLS`,
  },
  {
    image: "/v3.png",
    text: `CREATING WORLD‑CLASS
LIFESTYLE DESTINATIONS
ACROSS THE KINGDOM`,
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">
      <div
        className="hero-track"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="hero-slide"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
        ))}
      </div>

      <div key={current} className="hero-card slide-text">
        <div><h1>{slides[current].text}</h1></div>
      </div>

      {/* ✅ DOTS (UNCHANGED) */}
      <div className="hero-dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${current === index ? "active" : ""}`}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </section>
  );
}
``