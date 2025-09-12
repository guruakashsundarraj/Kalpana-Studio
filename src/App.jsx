import React, { useEffect, useRef, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ImageSlider from "./components/ImageSlider";
import MugCustomizer from "./components/MugCustomizer";

import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Gift from "./pages/Gift";
import Contact from "./pages/Contact";
import Wedding from "./pages/photography/Wedding";
import Engagement from "./pages/photography/Engagement";
import Birthday from "./pages/photography/Birthday";
import Family from "./pages/photography/Family";
import Newborn from "./pages/photography/Babyborn";

import Mug from "./pages/gifts/Mug";
import Frame from "./pages/Gifts/Frame";
import Clock from "./pages/Gifts/Clock";
import Keychain from "./pages/Gifts/Keychain";
import FAQs from "./pages/FAQs";

import "./App.css";
import CountUpStats from "./pages/CountUpStats";
import AboutPage from "./components/AboutPage";


function App() {
  const location = useLocation();
  const isContactPage = location.pathname === "/contact";

  const [navHeight, setNavHeight] = useState(0);
  const navRef = useRef(null);

  useEffect(() => {
    const nav = document.querySelector(".nav");
    if (nav) {
      setNavHeight(nav.offsetHeight);
    }
  }, []);

  return (
    <>
      <div ref={navRef}>
        <Navbar />
      </div>

      <div style={{ marginTop: `${navHeight}px` }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/gift" element={<Gift />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/wedding" element={<Wedding />} />
          <Route path="/engagement" element={<Engagement />} />
          <Route path="/birthday" element={<Birthday />} />
          <Route path="/family" element={<Family />} />
          <Route path="/newborn" element={<Newborn />} />
          <Route path="/mug" element={<Mug />} />
          <Route path="/frame" element={<Frame />} />
          <Route path="/clock" element={<Clock />} />
          <Route path="/keychain" element={<Keychain />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/gifts/mug" element={<MugCustomizer />} />
        </Routes>
      </div>
    
      <Footer />
    </>
  );
}

const AppWrapper = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default AppWrapper;
