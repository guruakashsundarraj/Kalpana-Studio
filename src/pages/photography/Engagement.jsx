import React from "react";
import { Link } from "react-router-dom";
import PricingCard from "../../components/PricingCard";

const Engagement = () => {
  const plans = [
    {
      title: "Essential",
      price: "₹7,000",
      features: ["2-hour session", "30 edited images", "1 location"],
    },
    {
      title: "Gold",
      price: "₹12,000",
      features: ["Outfit change", "50 images", "Couple poses guide"],
    },
    {
      title: "Cinematic",
      price: "₹18,000",
      features: ["Video teaser", "70 images", "Custom album"],
    },
  ];

  return (
    <div className="portfolio-detail-page">
      <section className="portfolio-header2 bg-img">
        <div className="overlay">
        <h1>Engagement Photography</h1>
        <p>
          Elegant, emotional, and timeless wedding photography captured across Thane and Mumbai.
        </p>
        </div>
      </section>


      <section className="portfolio-content">
        <div className="portfolio-info">
          <h2>About This Service</h2>
          <p>
            Your wedding is one of the most cherished moments of your life. Our wedding photography
            services capture every ritual, smile, and tear with elegance and emotion. Whether you want
            traditional posed shots or cinematic storytelling, we offer packages tailored to your day.
            From haldi and mehndi to the main ceremony and reception, our team ensures every special
            moment is documented beautifully.
          </p>
          <p>
            We use high-end DSLR and mirrorless cameras, lighting equipment, and creative techniques
            for an unforgettable album. Albums, videos, pre-wedding shoots and drone shots are also
            included in premium packages.
          </p>
        </div>

        <div className="portfolio-images">
          <img src="/gallery/wedding1.jpg" alt="Bride Entry" />
          <img src="/gallery/wedding2.jpg" alt="Wedding Rituals" />
          <img src="/gallery/wedding3.jpg" alt="Candid Couple" />
        </div>

        {/* Pricing Section */}
        <div className="pricing-section">
          <h2 className="pricing-title">Packages</h2>
          <div className="pricing-cards">
            {plans.map((plan, i) => (
              <PricingCard key={i} {...plan} />
            ))}
          </div>
        </div>

        <div className="portfolio-cta">
          <h3>Ready to Capture Your Big Day?</h3>
          <p>Let’s connect and create timeless memories together.</p>
          <Link to="/contact" className="portfolio-button">Contact Now</Link>
        </div>
      </section>
    </div>
  );
};


export default Engagement;
