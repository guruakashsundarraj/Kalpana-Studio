import React from "react";
import CountUp from "react-countup";
import { Camera } from "lucide-react";
import "./FAQs.css"; 

function CountUpStats() {
  return (
    <section className="stats-section">
      <div className="stats-container">
        <h2 className="stats-heading">
          BUILD TRUST WITH YOUR USERS WITH A BEAUTIFUL LANDING PAGE
        </h2>

        <div className="stats-grid">
          <div className="stats-item">
            <h3 className="stats-number">
              <CountUp end={45} duration={1.5} />+
            </h3>
            <p className="stats-text">
              Marriage Event
            </p>
          </div>

          <div className="stats-item">
            <h3 className="stats-number">
              <CountUp end={15.5} decimals={1} duration={1.5} />+
            </h3>
            <p className="stats-text">
              Year Experience
            </p>
          </div>

          <div className="stats-item">
            <h3 className="stats-number">
              <CountUp end={200} duration={1.5} />C+
            </h3>
            <p className="stats-text">
              Customers
            </p>
          </div>

          <div className="stats-item">
            <h3 className="stats-number">
            <Camera className="camera-icon" />
            <CountUp end={120} duration={1.5} />+
            </h3>
            <p className="stats-text">Cameras used for shoots</p>
           </div>
        </div>
      </div>
    </section>
  );
}

export default CountUpStats;