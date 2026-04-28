"use client";

const malls = [
  {
    name: "Mall of Arabia",
    city: "Jeddah",
    image: "/mall1.png",
  },
  {
    name: "Nakheel Mall",
    city: "Riyadh",
    image: "/mall2.png",
  },
  {
    name: "U Walk",
    city: "Riyadh",
    image: "/mall3.png",
  },
  {
    name: "Mall of Dhahran",
    city: "Dhahran",
    image: "/mall4.png",
  },
  // {
  //   name: "Dubai Mall",
  //   city: "Dubai",
  //   image: "/mall5.jpg",
  // },
];

const Portfolio = () => {
  return (
    <section className="portfolio-section">
      
      {/* Heading */}
      <div className="portfolio-header">
        <div className="center-portfolio-line" />

        <div className="center-portfolio-content">
          <span className="center-portfolio-eyebrow">
            Center Portfolio
          </span>

          <h2 className="center-portfolio-title">
            The biggest international brands
          </h2>

          <h3 className="center-portfolio-subtitle">
            Your gateway to an exciting shopping<br />
            and entertaining experience
          </h3>

          <p className="center-portfolio-description">
            Our unparalleled size and strategic locations establish our
            centers as the preferred shopping destinations for visitors.
          </p>
        </div>
      </div>

      {/* Grid */}
      <div className="portfolio-grid">
        {malls.map((mall, index) => (
          <div key={index} className="portfolio-card">
            <img src={mall.image} alt={mall.name} />

            <div className="overlay">
              <h3>{mall.name}</h3>
              <p>{mall.city}</p>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default Portfolio;
