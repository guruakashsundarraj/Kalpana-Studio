import React, { useState } from "react";
import PricingCard from "../../components/PricingCard";
import MugCustomizer from "../../components/MugCustomizer";

const plans = [
  {
    title: "Single Mug",
    price: "₹299",
    features: ["Glossy ceramic", "1 photo", "Dishwasher safe"],
  },
  {
    title: "Couple Mug",
    price: "₹549",
    features: ["Set of 2", "Wrap-around image", "Custom text"],
  },
  {
    title: "Magic Mug",
    price: "₹699",
    features: ["Heat-reveal photo", "Black coating", "Gift packaging"],
  },
];

export default function PhotoMug() {
  const [customizerError, setCustomizerError] = useState(false);

  const handleBookNow = () => {
    alert("Thank you for booking! We'll get in touch soon.");
  };

  return (
    <div className="photo-mug-page">
      <header className="mug-hero mug-fade-in">
        <h1 className="gradient-text">Customize Your Mug in <span>3D</span></h1>
        <p>
          Create your unique mug with your favorite photo, name, or message. Preview your design in 3D before ordering!
        </p>
        <button className="mug-btn mug-animate-in" onClick={handleBookNow}>Book Now</button>
      </header>

      <section className="mug-customizer-section mug-animate-in">
        <h2 className="gradient-subtitle">3D Mug Customizer</h2>
        {customizerError ? (
          <div className="error-message">
            Sorry, the 3D mug customizer failed to load. Please try refreshing the page or contact support.
          </div>
        ) : (
          <MugCustomizer onError={() => setCustomizerError(true)} />
        )}
      </section>

      <section className="mug-info mug-fade-in">
        <h2 className="gradient-subtitle">Why Choose Our Photo Mugs?</h2>
        <ul>
          <li>High-quality ceramic with glossy finish</li>
          <li>Vivid, fade-resistant printing</li>
          <li>Perfect for gifts, events, and personal use</li>
          <li>Multiple styles: Standard, Couple, Magic (heat-sensitive)</li>
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
          <li>Customize your mug using the 3D tool above.</li>
          <li>Choose your mug type and quantity.</li>
          <li>Proceed to checkout and upload your photo.</li>
          <li>Receive your personalized mug at your doorstep!</li>
        </ol>
        <div className="center-btn">
          <button className="mug-btn mug-animate-in" onClick={handleBookNow}>Book Now</button>
        </div>
      </section>
    </div>
  );
}