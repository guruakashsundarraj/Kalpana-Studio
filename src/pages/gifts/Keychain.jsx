import React from "react";
import PricingCard from "../../components/PricingCard";
import MugCustomizer from "../../components/MugCustomizer";

const plans = [
  {
    title: "Single Side",
    price: "₹149",
    features: ["1 photo", "Gloss acrylic", "Durable chain"],
  },
  {
    title: "Double Side",
    price: "₹199",
    features: ["2 photos", "Premium polish", "Printed both sides"],
  },
  {
    title: "Combo Pack",
    price: "₹399",
    features: ["Set of 3", "Mix shapes", "Gift box included"],
  },
];

export default function Keychain() {
  const handleBookNow = () => {
    alert("Thank you for booking! We'll get in touch soon.");
  };

  return (
    <div className="photo-mug-page">
      <header className="mug-hero mug-fade-in">
        <h1 className="gradient-text">Personalize Your <span>Keychain</span></h1>
        <p>
          Create your unique keychain with your favorite photo, name, or message. Make it a perfect gift or accessory!
        </p>
        <button className="mug-btn mug-animate-in" onClick={handleBookNow}>Book Now</button>
      </header>

      {/* Removed Mug Customizer Section */}

      <section className="mug-info mug-fade-in">
        <h2 className="gradient-subtitle">Why Choose Our Keychains?</h2>
        <ul>
          <li>High-quality acrylic, metal, and leather options</li>
          <li>Vivid, fade-resistant printing and engraving</li>
          <li>Perfect for gifts, events, and personal use</li>
          <li>Multiple styles: Single side, double side, combo packs</li>
        </ul>
      </section>

      <section className="pricing-section mug-animate-in">
        <h2 className="gradient-subtitle">Pricing</h2>
        <div className="pricing-cards">
          {plans.map((plan, i) => (
            <PricingCard key={i} {...plan} />
          ))}
        </div>
      </section>

      <section className="mug-order-info mug-fade-in">
        <h2 className="gradient-subtitle">How to Order</h2>
        <ol>
          <li>Choose your keychain type and quantity.</li>
          <li>Proceed to checkout and upload your photo or text.</li>
          <li>Customize as needed and confirm your order.</li>
          <li>Receive your personalized keychain at your doorstep!</li>
        </ol>
        <div className="center-btn">
          <button className="mug-btn mug-animate-in" onClick={handleBookNow}>Book Now</button>
        </div>
      </section>
    </div>
  );
}
