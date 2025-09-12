import React from "react";
import { motion } from "framer-motion";
import "./Pricing.css";

const PricingCard = ({ title, price, features }) => (
  <motion.div
    className="card"
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
  >
    <h3>{title}</h3>
    <p className="price">{price}/session</p>
    <ul>
      {features.map((f, idx) => (
        <li key={idx}>{f}</li>
      ))}
    </ul>
    <button className="cta-btn">Book Now</button>
  </motion.div>
);

export default PricingCard;
