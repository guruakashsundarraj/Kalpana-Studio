import React from "react";
import PricingCard from "../../components/PricingCard";

const Clock = () => {
  const plans = [
    {
      title: "Round Clock",
      price: "₹499",
      features: ["12\" dial", "Photo print", "Wall mount"],
    },
    {
      title: "Square Clock",
      price: "₹599",
      features: ["Modern design", "Silent movement", "Custom image"],
    },
    {
      title: "Designer Clock",
      price: "₹799",
      features: ["Framed layout", "HD print", "Gift box"],
    },
  ];

  const handleBookNow = () => {
    alert("Thank you for booking! We'll get in touch soon.");
  };

  return (
    <div className="photo-mug-page">
      <header className="mug-hero mug-fade-in">
        <h1 className="gradient-text">Customize Your <span>Photo Clock</span></h1>
        <p>
          A unique way to tell time. Customize your clock with a personal image or logo — perfect for birthdays, corporate gifts, or interior decor.
        </p>
        <button className="mug-btn mug-animate-in" onClick={handleBookNow}>Book Now</button>
      </header>

      <section className="mug-info mug-fade-in">
        <h2 className="gradient-subtitle">Why Choose Our Clocks?</h2>
        <ul>
          <li>Silent movement for a peaceful environment</li>
          <li>Durable prints that last for years</li>
          <li>Perfect for home, office, or gifting</li>
          <li>Ready to hang with stylish designs</li>
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
          <li>Select your preferred clock style and size.</li>
          <li>Upload your favorite image or design.</li>
          <li>Review and confirm the order details.</li>
          <li>Receive your customized clock at your doorstep!</li>
        </ol>
        <div className="center-btn">
          <button className="mug-btn mug-animate-in" onClick={handleBookNow}>Book Now</button>
        </div>
      </section>
    </div>
  );
};

export default Clock;
