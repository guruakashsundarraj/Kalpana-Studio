import React from "react";
import "./FAQs.css";

const questions = [
  {
    q: "What services do you offer?",
    a: "We offer a variety of photography services including weddings, engagements, birthdays, baby shoots, and more.",
  },
  {
    q: "How do I book a session?",
    a: "You can book a session by contacting us through our Contact page or calling our studio directly.",
  },
  {
    q: "What is your refund policy?",
    a: "We offer partial or full refunds depending on cancellation time. Read our policy for details.",
  },
  {
    q: "Can I reschedule my shoot?",
    a: "Yes, rescheduling is allowed with a minimum of 48 hours notice.",
  },
  {
    q: "Do you offer custom gifts?",
    a: "Yes! We customize mugs, clocks, photo frames, and more using your photos.",
  },
  {
    q: "What image formats are accepted?",
    a: "We accept JPEG, PNG, and WebP formats for all gift customizations.",
  },
  {
    q: "How long does delivery take?",
    a: "Typically, gift delivery takes 3–5 business days. Photo edits take up to 7 days.",
  },
  {
    q: "Do you travel for shoots?",
    a: "Yes, we travel for events on request. Travel fees may apply.",
  },
  {
    q: "What payment methods are accepted?",
    a: "We accept UPI, credit/debit cards, and cash at the studio.",
  },
  {
    q: "How do I contact support?",
    a: "You can use the Contact page or call us at +91-XXXXXXXXXX.",
  },
];

function FAQs() {
  return (
    <div className="faq-page">
      <h1>Frequently Asked Questions</h1>
      <div className="faq-list">
        {questions.map((item, index) => (
          <div key={index} className="faq-item">
            <h3>{index + 1}. {item.q}</h3>
            <p>{item.a}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQs;
