"use client";
import React from "react";

const Vision = () => {
  return (
    <section className="focus-vision-section">
      <div className="header-with-line">
        <span className="focus-vision-label">Focus And Vision</span>
      </div>

      <h2 className="focus-vision-heading">
        Discover more with us
      </h2>

      <p className="focus-vision-subheading">
        Committed to creating sustainable value, excellent service,
        and retail success.
      </p>

      <p className="focus-vision-description">
        Through our lifestyle centers, we aspire to create living and vibrant
        communities to enhance the quality of life for our visitors.
      </p>

      <div className="focus-vision-images">
        <div className="focus-vision-image-wrapper">
          <img src="/v1.png" alt="Lifestyle Center 1" />
        </div>

        <div className="focus-vision-image-wrapper">
          <img src="/v2.png" alt="Lifestyle Center 2" />
        </div>

        <div className="focus-vision-image-wrapper">
          <img src="/v3.png" alt="Lifestyle Center 3" />
        </div>
      </div>
    </section>
  );
};

export default Vision;