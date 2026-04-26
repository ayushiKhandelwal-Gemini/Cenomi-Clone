"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";

const slides = [
  { image: "/v1.png", text: `CHECKOUT THE PREFERRED\nSHOPPING DESTINATIONS\nFOR VISITORS` },
  { image: "/v2.png", text: `CENOMI CENTERS IS THE\nKINGDOM’S LARGEST OWNER\nAND OPERATOR OF MALLS` },
  { image: "/v3.png", text: `CREATING WORLD‑CLASS\nLIFESTYLE DESTINATIONS\nACROSS THE KINGDOM` },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [swiperRef, setSwiperRef] = useState<SwiperType | null>(null);

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

      <div className="hero-card">
        <h1>{slides[current].text}</h1>
      </div>

      <div className="hero-dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${current === index ? "active" : ""}`}
            onClick={() => swiperRef?.slideToLoop(index)}
          />
        ))}
      </div>
    </section>
  );
}