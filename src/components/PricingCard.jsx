import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import "./Pricing.css";

const PricingCard = ({ title, price, features = [] }) => {
  return (
    <motion.div
      className="card"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <h3 className="card-title">{title}</h3>
      <p className="price">{price}/session</p>

      <ul className="feature-list">
        {features.length > 0 ? (
          features.map((f, idx) => <li key={idx}>{f}</li>)
        ) : (
          <li>No features listed</li>
        )}
      </ul>

      <button className="cta-btn">Book Now</button>
    </motion.div>
  );
};

// ✅ Type checking (optional but helpful)
PricingCard.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  features: PropTypes.arrayOf(PropTypes.string),
};

export default PricingCard;
