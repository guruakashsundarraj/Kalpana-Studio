import React from "react";
import PricingCard from "../../components/PricingCard";
import MugCustomizer from "../../components/MugCustomizer";

const Frame = () => {
  const plans = [
    {
      title: "Basic Frame",
      price: "₹399",
      features: ["A5 Size", "1 photo print", "Glass cover"],
    },
    {
      title: "Double Frame",
      price: "₹749",
      features: ["Two-photo mount", "Stand + hook", "Premium look"],
    },
    {
      title: "Canvas Wrap",
      price: "₹1,099",
      features: ["Frameless edge", "HD print", "Ready to hang"],
    },
  ];

  const handleBookNow = () => {
    alert("Thank you for booking! We'll get in touch soon.");
  };

  return (
    <div className="photo-mug-page">
      <header className="mug-hero mug-fade-in">
        <h1 className="gradient-text">Decorate with <span>Photo Frames</span></h1>
        <p>
          Gift memories that last forever. Choose from elegant wood finishes, acrylic styles, or frameless canvas wraps to enhance any space.
        </p>
        <button className="mug-btn mug-animate-in" onClick={handleBookNow}>Book Now</button>
      </header>

      <section className="mug-info mug-fade-in">
        <h2 className="gradient-subtitle">Why Choose Our Frames?</h2>
        <ul>
          <li>High-quality wood, acrylic, and canvas options</li>
          <li>Professional printing with crystal-clear visuals</li>
          <li>Perfect for gifts, awards, and home decor</li>
          <li>Stylish designs with ready-to-hang setups</li>
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
          <li>Choose your frame type and size.</li>
          <li>Upload your favorite photo or artwork.</li>
          <li>Review and confirm your order details.</li>
          <li>Receive your beautifully framed memory at your doorstep!</li>
        </ol>
        <div className="center-btn">
          <button className="mug-btn mug-animate-in" onClick={handleBookNow}>Book Now</button>
        </div>
      </section>
    </div>
  );
};

export default Frame;
