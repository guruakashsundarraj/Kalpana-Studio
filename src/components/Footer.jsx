import React from "react";
import "./Footer.css";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Explore Links */}
        <div className="footer-column">
          <h4>Explore</h4>
          <ul className="footer-links">
            <li><a href="/">Home</a></li>
            <li><a href="/explore">Portfolio</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/gift">Gift</a></li>
          </ul>
        </div>

        {/* Portfolio Links */}
        <div className="footer-column">
          <h4>Portfolio</h4>
          <ul className="footer-links">
            <li><a href="/wedding">Wedding Photography</a></li>
            <li><a href="/engagement">Engagement Photography</a></li>
            <li><a href="/birthday">Birthday Photography</a></li>
            <li><a href="/family">Family Photoshoot</a></li>
            <li><a href="/babyborn">New BabyBorn Photography</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-column footer-contact">
          <h4>Contact</h4>
          <p>
            <FaMapMarkerAlt />
            <span>
              Kalpana Studio Shop no 6, A K Gopal, Nagar 60 feet Road,
              Mahim east Mumbai 400017.
            </span>
          </p>
          <p>
            <FaEnvelope />
            <span>kalpanastudio@gmail.com</span>
          </p>
          <p>
            <FaPhone />
            <span>+91 9773545642</span>
          </p>
        </div>

        {/* Studio Info */}
        <div className="footer-column footer-right">
          <p>
            <strong>
              “Our work is our tool for business promotion; hence, Kalpana Studio…”
            </strong>
            <br />
            Kalpana Studio reserves the right to use selected images/videos for promotional purposes.
          </p>
          <p>
            If you don’t wish your images to be used, please inform us in writing
            at the time of booking. In such cases, copyright charges apply at 50% of the package cost.
          </p>
          <p>
            All images remain the copyright of Kalpana Studio unless agreed otherwise.
            We respect your privacy and handle content securely.
          </p>
        </div>

      </div>

     

      {/* Footer Bottom */}
      <div className="footer-bottom">
        © 2025 Kalpana Studio. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
