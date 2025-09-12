import React, { useRef } from "react";
import { useEffect } from "react";
import traveler from "../assets/traveler.jpg";
import { Camera, Award, Heart, Users, Star } from "lucide-react";
import "./About.css";
import { 
  Section,
  Container,
  ContentReverse,
  Content,
  TextBlock,
  Title,
  Underline,
  Paragraph,
  ImageBlock,
} from './stylecomponents/AboutStyle';

const aboutMe = {
  name: "Your Name",
  image: "./profile.jpg",
  bio: "I am a passionate photographer dedicated to capturing life's most precious moments and transforming them into lasting memories. With years of experience, I strive to create images that tell a story and evoke emotion.",
};

const studio = {
  image: "./profile.jpg",
  description: [
    "Our state-of-the-art studio is equipped with professional lighting, multiple backdrop options, and comfortable spaces for clients to relax and prepare for their sessions.",
    "Located in the heart of the city, our studio provides the perfect environment for creating stunning portraits while maintaining a warm and welcoming atmosphere."
  ],
  features: [
    { icon: <Award size={24} />, text: "Professional Equipment" },
    { icon: <Heart size={24} />, text: "Comfortable Environment" },
    { icon: <Star size={24} />, text: "Award-Winning Service" }
  ]
};

const teamMembers = [
  {
    name: 'Sarah Johnson',
    role: 'Lead Photographer',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    bio: '10+ years capturing life\'s precious moments with artistic vision and technical expertise.'
  },
  {
    name: 'Michael Chen',
    role: 'Wedding Specialist',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    bio: 'Specializes in wedding photography with a romantic and timeless approach to storytelling.'
  },
  {
    name: 'Emily Rodriguez',
    role: 'Portrait Artist',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    bio: 'Expert in family and newborn photography, creating warm and intimate portraits.'
  },
  {
    name: 'David Kim',
    role: 'Creative Director',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    bio: 'Oversees all creative projects and custom gift designs with innovative artistic vision.'
  }
];

const achievements = [
  { number: '1000+', label: 'Happy Clients' },
  { number: '5000+', label: 'Photos Captured' },
  { number: '8+', label: 'Years Experience' },
  { number: '50+', label: 'Awards Won' }
];

const values = [
  {
    icon: <Heart size={48} className="about-value-icon" />,
    title: 'Passion',
    description: 'We pour our heart into every shot, ensuring each image tells a meaningful story.'
  },
  {
    icon: <Users size={48} className="about-value-icon" />,
    title: 'Connection',
    description: 'Building genuine relationships with our clients to capture authentic moments.'
  },
  {
    icon: <Award size={48} className="about-value-icon" />,
    title: 'Excellence',
    description: 'Committed to delivering the highest quality in every aspect of our service.'
  }
];

function AnimatedImageBlock({ src, alt }) {
  const imgRef = useRef(null);

  useEffect(() => {
    if (imgRef.current) {
      imgRef.current.classList.add("image-animate");
    }
  }, []);

  return (
    <ImageBlock>
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        width={550}
        height={850}
        className="image"
      />
    </ImageBlock>
  );
}

function AnimatedTextBlock({ children }) {
  const textRef = useRef(null);

  useEffect(() => {
    if (textRef.current) {
      textRef.current.classList.add("text-block-animate");
    }
  }, []);

  return (
    <TextBlock ref={textRef} className="text-block">
      {children}
    </TextBlock>
  );
}


export default function About() {
  return (
    <div className="about-section">
      <div className="about-container">

        {/* About Me - uses OurTeam.jsx style */}
        <Section>
          <Container>
            <ContentReverse>
              <AnimatedImageBlock src={aboutMe.image} alt={aboutMe.name} />
              <AnimatedTextBlock>
                <Title>
                  ABOUT ME <Underline />
                </Title>
                <Paragraph>{aboutMe.bio}</Paragraph>
              </AnimatedTextBlock>
            </ContentReverse>
          </Container>
        </Section>

        {/* Our Story - uses OurTeam.jsx style */}
        <Section>
          <Container>
            <Content>
              <AnimatedImageBlock src={studio.image} alt="Studio" />
              <AnimatedTextBlock>
                <Title>
                  OUR STORY <Underline />
                </Title>
                {studio.description.map((desc, i) => (
                  <Paragraph key={i}>{desc}</Paragraph>
                ))}
                <ul className="about-studio-features">
                  {studio.features.map((f, i) => (
                    <li className="about-studio-feature" key={i}>
                      {f.icon}
                      <span>{f.text}</span>
                    </li>
                  ))}
                </ul>
              </AnimatedTextBlock>
            </Content>
          </Container>
        </Section>

        {/* The rest remains unchanged */}
        <h2 className="about-title" style={{marginTop: "3rem"}}>
          OUR TEAM <span className="blue-underline"></span>
        </h2>
        <div className="about-grid">
          {teamMembers.map((member, i) => (
            <div className="about-mini-card" key={i}>
              <div className="about-team-img-wrap">
                <img src={member.image} alt={member.name} />
                <span className="icon-badge">
                  <Camera size={16} color="#fff" />
                </span>
              </div>
              <div className="about-team-name">{member.name}</div>
              <div className="about-team-role">{member.role}</div>
              <div className="about-team-bio">{member.bio}</div>
            </div>
          ))}
        </div>

        <h2 className="about-title" style={{marginTop: "3rem"}}>
          OUR ACHIEVEMENTS <span className="blue-underline"></span>
        </h2>
        <div className="about-grid">
          {achievements.map((a, i) => (
            <div className="about-mini-card" key={i}>
              <div className="about-achievement-number">{a.number}</div>
              <div className="about-achievement-label">{a.label}</div>
            </div>
          ))}
        </div>

        <h2 className="about-title" style={{marginTop: "3rem"}}>
          OUR VALUES <span className="blue-underline"></span>
        </h2>
        <div className="about-grid">
          {values.map((v, i) => (
            <div className="about-mini-card" key={i}>
              {v.icon}
              <div className="about-value-title">{v.title}</div>
              <div className="about-value-description">{v.description}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}