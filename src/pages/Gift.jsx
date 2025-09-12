// Gift.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./Gift.css";

const giftItems = [
  {
    title: "Photo Mug",
    image: "/photo-mug.placeholder.jpg",
    link: "/gift/mug",
  },
  {
    title: "Photo Frame",
    image: "/images/gifts/frame-placeholder.jpg",
    link: "/gift/frame",
  },
  {
    title: "Clock",
    image: "/images/gifts/clock-placeholder.jpg",
    link: "/gift/clock",
  },
  {
    title: "Keychain",
    image: "/images/gifts/keychain-placeholder.jpg",
    link: "/gift/keychain",
  },
];

export default function Gift() {
  return (
    <div className="gift-page">
      <h2 className="gift-heading">🎁 Choose Your Personalized Gift</h2>
      <div className="gift-container">
        {giftItems.map((item, index) => (
          <Link to={item.link} className="gift-box" key={index}>
            <img src={item.image} alt={item.title} className="gift-image" />
            <h3 className="gift-title">{item.title}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
}
