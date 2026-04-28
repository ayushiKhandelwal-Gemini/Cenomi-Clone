"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";

import "swiper/css";

const slides = [
  "/opp1.jpg",
  "/opp2.jpg",
  "/opp3.jpg",
];

const Opportunities = () => {
  return (
    <section className="opportunity-section">

      {/* LEFT CONTENT */}
      <motion.div
        className="op-left"
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }}
      >
        <div className="center-opportunity-line" />
        <div className="small-title">
          Opportunities & New Developments
        </div>

        <h2>Uncover great potential for you</h2>

        <h3>
          Engage with millions of retail consumers, today
        </h3>

        <p>
          Stepping into our Centers network isn’t just about space; it’s about
          unlocking a world of possibilities. Together, we can create
          exceptional experiences that let your brand leave a lasting impact
          with your consumers.
        </p>
      </motion.div>

      {/* RIGHT IMAGE CAROUSEL */}
      <motion.div
        className="op-right"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false }}
      >
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 2500 }}
          loop={true}
        >
          {slides.map((img, index) => (
            <SwiperSlide key={index}>
              <img src={img} alt={`slide-${index}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>

    </section>
  );
};

export default Opportunities;