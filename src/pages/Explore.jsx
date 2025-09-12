// Explore.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./Explore.css";

const categories = [
  {
    title: "Wedding Photography",
    image: "/gallery/wedding.jpg",
    link: "/wedding",
  },
  {
    title: "Engagement",
    image: "/gallery/engagement.jpg",
    link: "/engagement",
  },
  {
    title: "Birthday Photography",
    image: "/gallery/birthday.jpg",
    link: "/birthday",
  },
  {
    title: "Family Photoshoot",
    image: "/gallery/family.jpg",
    link: "/family",
  },
  {
    title: "New Baby Born",
    image: "/gallery/baby.jpg",
    link: "/babyborn",
  },
];

const Explore = () => {
  return (
    <div className="explore-page">
      <section className="explore-hero">
        <h1 className="explore-heading">Explore Our Portfolio</h1>
        <p className="explore-subtext">
          Discover our creative work across all your precious life moments.
        </p>
      </section>

      <section className="portfolio-grid">
        {categories.map((cat, index) => (
          <div className="portfolio-card" key={index}>
            <img src={cat.image} alt={cat.title} className="portfolio-img" />
            <h3>{cat.title}</h3>
            <Link to={cat.link} className="portfolio-btn">
              See Details
            </Link>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Explore;
