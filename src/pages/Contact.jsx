import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, Camera } from "lucide-react";
import { toast } from "sonner";
import "../components/ContactForm/Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle input updates
  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  // Submit form to backend API
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.fullName || !formData.email || !formData.phone || !formData.message) {
      toast.error("Please fill in all required fields");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Message sent successfully! We'll get back to you within 24 hours.");
        setFormData({ fullName: "", email: "", phone: "", message: "" });
      } else {
        toast.error(data.message || "Failed to send message");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error("Something went wrong. Please try again later.");
    }

    setIsSubmitting(false);
  };

  // Static info data
  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Our Studio",
      details: ["123 Photography Lane", "Studio City, CA 90210"],
      action: "Get Directions"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["Mobile No", "Available 9AM - 6PM"],
      action: "Call Now"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["abc@gmail.com", "We respond within 24 hours"],
      action: "Send Email"
    },
    {
      icon: Clock,
      title: "Studio Hours",
      details: ["Mon-Fri: 9AM - 6PM", "Sat-Sun: 10AM - 4PM"],
      action: "Book Appointment"
    }
  ];

  const randomPhotos = [
    "../assets/img1.jpg",
    "../assets/img2.jpg",
    "../assets/img3.jpg",
    "../assets/img4.jpg",
  ];

  return (
    <div className="contact-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <Camera className="hero-icon" />
          <h1 className="hero-title">
            Get In <span className="highlight-text">Touch</span>
          </h1>
          <p className="hero-description">
            Ready to create something beautiful together? We'd love to hear about 
            your vision and discuss how we can bring it to life.
          </p>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="contact-form-info">
        <div className="container">
          <div className="grid">
            {/* Contact Form */}
            <div className="form-section">
              <div className="card">
                <div className="card-header">
                  <h2 className="card-title">Send Us a Message</h2>
                  <p className="card-subtitle">
                    Fill out the form below and we'll get back to you as soon as possible.
                  </p>
                </div>

                <div className="card-content">
                  <form onSubmit={handleSubmit} className="form">
                    <div className="grid two-columns">
                      <div className="input-group">
                        <label htmlFor="fullName">Full Name *</label>
                        <input
                          id="fullName"
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={(e) => handleInputChange("fullName", e.target.value)}
                          placeholder="Enter your full name"
                          required
                        />
                      </div>

                      <div className="input-group">
                        <label htmlFor="email">Email Address *</label>
                        <input
                          id="email"
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          placeholder="your@example.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="input-group">
                      <label htmlFor="phone">Phone Number *</label>
                      <input
                        id="phone"
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        placeholder="Mobile number"
                        required
                      />
                    </div>

                    <div className="input-group">
                      <label htmlFor="message">Message *</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        placeholder="Tell us about your photography needs, preferred dates, or any questions you have..."
                        rows={6}
                        required
                      />
                    </div>

                    <button type="submit" className="submit-button" disabled={isSubmitting}>
                      {isSubmitting ? "Sending..." : (
                        <>
                          <Send className="send-icon" />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </div>
            </div>

            {/* Info Section */}
            <div className="info-section">
              <div className="info-cards">
                {contactInfo.map((info, index) => (
                  <div key={index} className="card">
                    <div className="card-content">
                      <div className="info-item">
                        <info.icon className="info-icon" />
                        <div className="info-text">
                          <h3>{info.title}</h3>
                          {info.details.map((detail, i) => (
                            <p key={i}>{detail}</p>
                          ))}
                          <button className="info-action">{info.action}</button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="card">
                <div className="card-header">
                  <h3>Recent Work</h3>
                  <p>A glimpse of our latest photography sessions</p>
                </div>
                <div className="card-content">
                  <div className="photo-grid">
                    {randomPhotos.slice(0, 4).map((photo, index) => (
                      <div key={index} className="photo-item">
                        <img src={photo} alt={`Recent work ${index + 1}`} />
                      </div>
                    ))}
                  </div>
                  <button className="view-portfolio">View Full Portfolio</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="container">
          <div className="map-card">
            <MapPin className="map-icon" />
            <div>
              <div className="map-title">Find Our Studio</div>
              <div className="map-desc">Interactive map coming soon</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <div className="text-center">
            <h2>Frequently Asked Questions</h2>
            <p>Quick answers to common questions about our services</p>
          </div>
          <div className="faq-grid">
            <div className="card">
              <div className="card-content">
                <h3>How far in advance should I book?</h3>
                <p>
                  We recommend booking 2-4 weeks in advance for regular sessions and 
                  2-6 months for weddings to ensure availability.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-content">
                <h3>What's included in a session?</h3>
                <p>
                  All sessions include professional photography, basic editing, 
                  and an online gallery with high-resolution downloads.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-content">
                <h3>Do you travel for shoots?</h3>
                <p>
                  Yes! We offer on-location photography throughout the region. 
                  Travel fees may apply for locations over 25 miles from our studio.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-content">
                <h3>How long until I get my photos?</h3>
                <p>
                  Most sessions are delivered within 1-2 weeks. Wedding galleries 
                  typically take 4-6 weeks due to the extensive editing process.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
