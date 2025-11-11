import React, { useState, useEffect, useRef } from "react";
import { ArrowRight, Camera, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import "./ImageSlider.css";

import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";

const images = [img1, img2, img3, img4];

const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: img1,
      title: "Capturing Life's",
      subtitle: "Perfect Moments",
      description: "Professional photography studio specializing in weddings, portraits, and personalized gifts. Let us tell your story through our lens."
    },
    {
      image: img2,
      title: "Wedding",
      subtitle: "Photography",
      description: "Immortalize your special day with elegant and timeless wedding photography that captures every precious moment."
    },
    {
      image: img3,
      title: "Family",
      subtitle: "Portraits",
      description: "Create lasting memories with professional family photo sessions that showcase your unique bond and love."
    },
    {
      image: img4,
      title: "Newborn",
      subtitle: "Sessions",
      description: "Gentle and artistic newborn photography to capture those fleeting first moments of your little one's life."
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={cn(
            "absolute inset-0 transition-opacity duration-1000",
            index === currentSlide ? "opacity-100" : "opacity-0"
          )}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="hero-fade-in">
          {/* Static Studio Name */}
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-serif font-bold text-white mb-2">
              Lumina <span className="text-gradient-gold">Studio</span>
            </h1>
            <p className="text-lg text-white/80">Professional Photography</p>
          </div>
          
          {/* Dynamic Content - Smaller and Less Prominent */}
          <div className="opacity-80">
            <h2 className="text-2xl md:text-3xl font-serif text-white/90 mb-3">
              {slides[currentSlide].title} <span className="text-accent">{slides[currentSlide].subtitle}</span>
            </h2>
            <p className="text-base md:text-lg text-white/70 mb-6 max-w-2xl mx-auto">
              {slides[currentSlide].description}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button size="default" className="btn-studio-gold px-6 py-2">
                Book a Session
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Link to="/portfolio">
                <Button size="default" variant="outline" className="btn-studio-outline px-6 py-2">
                  View Portfolio
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-300 group"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-300 group"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={cn(
              "w-3 h-3 rounded-full transition-all duration-300",
              index === currentSlide 
                ? "bg-accent w-8" 
                : "bg-white/30 hover:bg-white/50"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Floating Camera Icon */}
      <div className="absolute top-1/4 right-10 float-animation">
        <Camera className="w-24 h-24 text-accent/30" />
      </div>
    </section>
  );
};

export default ImageSlider;