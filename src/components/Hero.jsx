import React from "react";
import PropTypes from "prop-types";
import "../components/Hero.css";

const Hero = (props) => {
  return (
    <div className="hero-header78">
      <div className="hero-column thq-section-max-width thq-section-padding">
        <div className="hero-content1">
          <h1 className="hero-text1 thq-heading-1">{props.heading1}</h1>
          <p className="hero-text2 thq-body-large">{props.content1}</p>
        </div>
        <div className="hero-actions">
          <button className="thq-button-filled hero-button1">
            <span className="thq-body-small">{props.action1}</span>
          </button>
          <button className="thq-button-outline hero-button2">
            <span className="thq-body-small">{props.action2}</span>
          </button>
        </div>
      </div>

      <div className="hero-content2">
        {/* First row of images */}
        <div className="hero-row-container1 thq-mask-image-horizontal thq-animated-group-container-horizontal">
          <div className="thq-animated-group-horizontal">
            <img alt={props.image1Alt} src={props.image1Src} className="hero-placeholder-image10 thq-img-ratio-1-1 thq-img-scale" />
            <img alt={props.image2Alt} src={props.image2Src} className="hero-placeholder-image11 thq-img-ratio-1-1 thq-img-scale" />
            <img alt={props.image3Alt} src={props.image3Src} className="hero-placeholder-image12 thq-img-ratio-1-1 thq-img-scale" />
            <img alt={props.image4Alt} src={props.image4Src} className="hero-placeholder-image13 thq-img-ratio-1-1 thq-img-scale" />
            <img alt={props.image5Alt} src={props.image5Src} className="hero-placeholder-image14 thq-img-ratio-1-1 thq-img-scale" />
            <img alt={props.image6Alt} src={props.image6Src} className="hero-placeholder-image15 thq-img-ratio-1-1 thq-img-scale" />
          </div>

          <div className="thq-animated-group-horizontal">
            <img alt={props.image1Alt} src={props.image1Src} className="hero-placeholder-image16 thq-img-ratio-1-1 thq-img-scale" />
            <img alt={props.image2Alt} src={props.image2Src} className="hero-placeholder-image17 thq-img-ratio-1-1 thq-img-scale" />
            <img alt={props.image3Alt} src={props.image3Src} className="hero-placeholder-image18 thq-img-ratio-1-1 thq-img-scale" />
            <img alt={props.image4Alt} src={props.image4Src} className="hero-placeholder-image19 thq-img-ratio-1-1 thq-img-scale" />
            <img alt={props.image5Alt} src={props.image5Src} className="hero-placeholder-image20 thq-img-ratio-1-1 thq-img-scale" />
            <img
              alt="Hero Image"
              src="https://images.unsplash.com/photo-1534312527009-56c7016453e6?ixlib=rb-4.0.3&w=1500"
              className="hero-placeholder-image21 thq-img-ratio-1-1 thq-img-scale"
            />
          </div>
        </div>

        {/* Second row of images */}
        <div className="hero-row-container2 thq-mask-image-horizontal thq-animated-group-container-horizontal">
          <div className="thq-animated-group-horizontal-reverse">
            <img alt={props.image7Alt} src={props.image7Src} className="hero-placeholder-image22 thq-img-ratio-1-1 thq-img-scale" />
            <img alt={props.image8Alt} src={props.image8Src} className="hero-placeholder-image23 thq-img-ratio-1-1 thq-img-scale" />
            <img alt={props.image9Alt} src={props.image9Src} className="hero-placeholder-image24 thq-img-ratio-1-1 thq-img-scale" />
            <img alt={props.image10Alt} src={props.image10Src} className="hero-placeholder-image25 thq-img-ratio-1-1 thq-img-scale" />
            <img alt={props.image11Alt} src={props.image11Src} className="hero-placeholder-image26 thq-img-ratio-1-1 thq-img-scale" />
            <img alt={props.image12Alt} src={props.image12Src} className="hero-placeholder-image27 thq-img-ratio-1-1 thq-img-scale" />
          </div>

          <div className="thq-animated-group-horizontal-reverse">
            <img alt={props.image7Alt} src={props.image7Src} className="hero-placeholder-image28 thq-img-ratio-1-1 thq-img-scale" />
            <img alt={props.image8Alt} src={props.image8Src} className="hero-placeholder-image29 thq-img-ratio-1-1 thq-img-scale" />
            <img alt={props.image9Alt} src={props.image9Src} className="hero-placeholder-image30 thq-img-ratio-1-1 thq-img-scale" />
            <img alt={props.image10Alt} src={props.image10Src} className="hero-placeholder-image31 thq-img-ratio-1-1 thq-img-scale" />
            <img alt={props.image11Alt} src={props.image11Src} className="hero-placeholder-image32 thq-img-ratio-1-1 thq-img-scale" />
            <img
              alt="Hero Image"
              src="https://images.unsplash.com/photo-1568214379698-8aeb8c6c6ac8?ixlib=rb-4.0.3&w=1500"
              className="hero-placeholder-image33 thq-img-ratio-1-1 thq-img-scale"
            />
          </div>
        </div>
      </div>

      {/* Replaces dangerous-html Script safely */}
      <style>{`
        @keyframes scroll-x {
          from { transform: translateX(0); }
          to { transform: translateX(calc(-100% - 16px)); }
        }

        @keyframes scroll-y {
          from { transform: translateY(0); }
          to { transform: translateY(calc(-100% - 16px)); }
        }
      `}</style>
    </div>
  );
};

Hero.defaultProps = {
  image8Alt: "Engagement shoot highlights",
  image6Alt: "Recent wedding photo session",
  heading1: "Welcome to our Photo Studio Portfolio",
  image7Alt: "Family portrait gallery",
  image2Src:
    "https://images.unsplash.com/photo-1559423915-b16b7f5bf485?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  image12Alt: "Contact for inquiries",
  image11Src:
    "https://images.unsplash.com/photo-1672588945805-0ddb66cdcf78?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  image10Src:
    "https://images.unsplash.com/photo-1610765733204-6c18a1552093?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  image1Src:
    "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  image9Src:
    "https://images.unsplash.com/photo-1648891216332-f64339e04e95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  image7Src:
    "https://images.unsplash.com/photo-1757313596665-6c89c59492a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  image2Alt: "Family portrait session",
  image4Alt: "Birthday celebration photos",
  image8Src:
    "https://images.unsplash.com/photo-1546984484-597a997ccf32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  action1: "Main action",
  image1Alt: "Wedding photo shoot",
  content1:
    "Explore our diverse portfolio showcasing various photography sessions. Choose from weddings, family portraits, engagements, birthdays, and newborn baby shoots. Book your session with us today!",
  image4Src:
    "https://images.unsplash.com/photo-1566041510632-30055e21a9cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  action2: "Secondary action",
  image12Src:
    "https://images.unsplash.com/photo-1565065789724-93e2d960b981?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  image6Src:
    "https://images.unsplash.com/photo-1639509803146-010317bd9827?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  image3Src:
    "https://images.unsplash.com/photo-1650803321892-efba59b28a60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  image11Alt: "Booking a session",
  image5Src:
    "https://images.unsplash.com/photo-1613798646586-01458ce4d7ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  image10Alt: "Newborn baby moments",
  image9Alt: "Birthday party memories",
  image5Alt: "Newborn baby photography",
  image3Alt: "Engagement photography",
};

Hero.propTypes = {
  image8Alt: PropTypes.string,
  image6Alt: PropTypes.string,
  heading1: PropTypes.string,
  image7Alt: PropTypes.string,
  image2Src: PropTypes.string,
  image12Alt: PropTypes.string,
  image11Src: PropTypes.string,
  image10Src: PropTypes.string,
  image1Src: PropTypes.string,
  image9Src: PropTypes.string,
  image7Src: PropTypes.string,
  image2Alt: PropTypes.string,
  image4Alt: PropTypes.string,
  image8Src: PropTypes.string,
  action1: PropTypes.string,
  image1Alt: PropTypes.string,
  content1: PropTypes.string,
  image4Src: PropTypes.string,
  action2: PropTypes.string,
  image12Src: PropTypes.string,
  image6Src: PropTypes.string,
  image3Src: PropTypes.string,
  image11Alt: PropTypes.string,
  image5Src: PropTypes.string,
  image10Alt: PropTypes.string,
  image9Alt: PropTypes.string,
  image5Alt: PropTypes.string,
  image3Alt: PropTypes.string,
};

export default Hero;
