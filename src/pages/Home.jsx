import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";
import ImageSlider from "../components/ImageSlider";
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import CountUpStats from "../pages/CountUpStats";
import { ArrowRight, Camera, Heart, Star, Users } from "lucide-react";
import "./Home.css";

const Home = () => {
    const services = [
    {
      icon: Heart,
      title: "Wedding Photography",
      description: "Capture your special day with timeless elegance and artistic vision.",
      link: "/portfolio/marriage"
    },
    {
      icon: Users,
      title: "Family Portraits",
      description: "Create lasting memories with professional family photo sessions.",
      link: "/portfolio/family"
    },
    {
      icon: Star,
      title: "Engagement Sessions",
      description: "Document your love story with romantic and intimate photography.",
      link: "/portfolio/engagement"
    },
    {
      icon: Camera,
      title: "Custom Gifts",
      description: "Transform your memories into beautiful personalized keepsakes.",
      link: "/gifts"
    }
  ];

  const handleBookNow = () => {
    alert("Thank you for booking! We'll get in touch soon.");
  };
  return (
    <>
      <ImageSlider />
      <CountUpStats />

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>
            Capturing Life's <span className="text-gradient">Perfect Moments</span>
          </h1>
          <p>
            Professional photography studio specializing in weddings, portraits,
            and personalized gifts. Let us tell your story through our lens.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary" onClick={handleBookNow}>
  Book a Session <ArrowRight className="icon" />
</button>

<Link to="/portfolio">
  <button className="btn-outline">
    View Portfolio
  </button>
</Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="section-header">
          <h2>Our <span className="text-gradient">Services</span></h2>
          <p>
            From intimate moments to grand celebrations, we capture it all with
            artistic excellence and professional care.
          </p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <Link key={index} to={service.link} className="service-card">
              <Card className="card-content">
                <Card.Body>
  <service.icon className="icon-large" />
  <h3>{service.title}</h3>
  <p>{service.description}</p>
</Card.Body>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="about-short-section">
        <div className="about-short-content">
          <img
            src="/profile.jpg"
            alt="Studio Owner"
            className="about-profile-img"
          />
          <div>
            <h2>
              Hi, I'm <span className="highlight">Your David</span>
            </h2>
            <p className="about-dynamic-text">
              <Typewriter
                words={[
                  "Capturing moments, creating memories.",
                  "Professional photography for every occasion.",
                  "Personalized gifts with a creative touch.",
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </p>
            <Link to="/about" className="about-btn">
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>

       {/* CTA Section */}
      <section className="cta-section">
        <h2>Ready to Create Something <span className="text-gradient">Beautiful?</span></h2>
        <p>
          Let's work together to capture your precious moments and create memories
          that will last a lifetime.
        </p>
        <div className="cta-buttons">
          <Button className="btn-primary" onClick={handleBookNow}>
            Get Started Today
          </Button>
          <Link to="/contact">
            <Button className="btn-outline">Contact Us</Button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;
