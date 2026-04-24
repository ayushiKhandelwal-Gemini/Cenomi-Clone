"use client";

import { motion } from "framer-motion";

const stats = [
  { number: "10", label: "CITIES" },
  { number: "22", label: "MALLS" },
  { number: "5000+", label: "STORES" },
  { number: "124MN+", label: "FOOTFALL ANNUALLY" },
];

const StatsSection = () => {
  return (
    <section className="stats-section">

      {/* TEXT + BORDER */}
      <motion.div
        className="stats-content"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }}
      >

        {/* Animated Border */}
        <motion.div
          className="border-box"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: false }}
        />

        <span className="small-title">Market Reach & Statistics</span>

        <h2>Uncovering the great potential of MENA</h2>

        <p>
          Our strength lies in not just reaching, but connecting with
          diverse communities
        </p>
      </motion.div>

      {/* STATS */}
      <div className="stats-row">
        {stats.map((item, i) => (
          <motion.div
            key={i}
            className="stat-box"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            viewport={{ once: false }}
          >
            <h3>{item.number}</h3>
            <span>{item.label}</span>
          </motion.div>
        ))}
      </div>

    </section>
  );
};

export default StatsSection;