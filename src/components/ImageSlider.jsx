import React, { useEffect, useRef } from "react";
import "./ImageSlider.css";

import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";

const images = [img1, img2, img3, img4];

function ImageSlider() {
  const carouselRef = useRef(null);
  const timeRef = useRef(null);
  const autoNextTimer = useRef(null);
  const runningTimeout = useRef(null);

  useEffect(() => {
    const nextBtn = document.getElementById("next");
    const prevBtn = document.getElementById("prev");

    const carousel = carouselRef.current;
    const slider = carousel.querySelector(".list");
    const thumbnail = carousel.querySelector(".thumbnail");

    const timeRunning = 3000;
    const timeAutoNext = 7000;

    const showSlider = (type) => {
      const sliderItems = slider.querySelectorAll(".item");
      const thumbnailItems = thumbnail.querySelectorAll(".item");

      if (type === "next") {
        slider.appendChild(sliderItems[0]);
        thumbnail.appendChild(thumbnailItems[0]);
        carousel.classList.add("next");
      } else {
        slider.prepend(sliderItems[sliderItems.length - 1]);
        thumbnail.prepend(thumbnailItems[thumbnailItems.length - 1]);
        carousel.classList.add("prev");
      }

      clearTimeout(runningTimeout.current);
      runningTimeout.current = setTimeout(() => {
        carousel.classList.remove("next");
        carousel.classList.remove("prev");
      }, timeRunning);

      clearTimeout(autoNextTimer.current);
      autoNextTimer.current = setTimeout(() => {
        nextBtn.click();
      }, timeAutoNext);
    };

    nextBtn.onclick = () => showSlider("next");
    prevBtn.onclick = () => showSlider("prev");

    autoNextTimer.current = setTimeout(() => {
      nextBtn.click();
    }, timeAutoNext);

    return () => {
      clearTimeout(autoNextTimer.current);
      clearTimeout(runningTimeout.current);
    };
  }, []);

  return (
    <div className="carousel" ref={carouselRef}>
      <div className="list">
        {images.map((img, i) => (
          <div className="item" key={i}>
            <img src={img} alt={`slider-${i}`} />
            <div className="content">
              <div className="author">KALPANA STUDIO</div>
              <div className="title">Capturing The Moment</div>
              <div className="topic">PHOTOGRAPHY</div>
              <div className="buttons">
                <button>SEE MORE</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="thumbnail">
        {images.map((img, i) => (
          <div className="item" key={i}>
            <img src={img} alt={`thumb-${i}`} />
          </div>
        ))}
      </div>

      <div className="arrows">
        <button id="prev">&lt;</button>
        <button id="next">&gt;</button>
      </div>

      <div className="time" ref={timeRef}></div>
    </div>
  );
}

export default ImageSlider;
