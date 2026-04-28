"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";

const slides = [
  {
    image:
      "https://centers.cenomi.com/wp-content/uploads/sites/2/2025/05/stt__1_-1.jpg",
    text: `CHECKOUT THE PREFERRED\nSHOPPING DESTINATIONS\nFOR VISITORS`,
  },
  {
    image:
      "https://centers.cenomi.com/wp-content/uploads/sites/2/2025/05/image008.webp",
    text: `CENOMI CENTERS IS THE\nKINGDOM’S LARGEST OWNER\nAND OPERATOR OF MALLS`,
  },
  {
    image:
      "https://centers.cenomi.com/wp-content/uploads/sites/2/2025/05/Jawharat_Jeddah_Piazza_Aerial_View_2__1_.webp",
    text: `CREATING WORLD‑CLASS\nLIFESTYLE DESTINATIONS\nACROSS THE KINGDOM`,
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [swiperRef, setSwiperRef] = useState<SwiperType | null>(null);

  const progress = ((current + 1) / slides.length) * 100;

  return (
    <section className="hero">
      <motion.div
        className="hero-track"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop
          onSwiper={setSwiperRef}
          onSlideChange={(swiper) => setCurrent(swiper.realIndex)}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div
                className="hero-slide"
                style={{ backgroundImage: `url(${slide.image})` }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
      <div className="hero-content">
        <div className="hero-card">
          <h1>{slides[current].text}</h1>
        </div>

        <div className="hero-controls">
          <button onClick={() => swiperRef?.slidePrev()} className="hero-arrow">
            ‹
          </button>

          <div className="hero-progress">
            <span
              className="hero-progress-fill"
              style={{ width: `${progress}%` }}
            />
          </div>

          <button onClick={() => swiperRef?.slideNext()} className="hero-arrow">
            ›
          </button>
        </div>
      </div>
    </section>
  );
}