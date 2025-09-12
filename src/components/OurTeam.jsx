import React from "react";
import traveler from "../assets/traveler.jpg";
import "./About.css";

const OurTeam = () => {
  return (
    <Section>
      <Container>
        <ContentReverse>
          <ImageBlock>
            <img
              src={traveler}
              alt="Traveler"
              width={550}
              height={850}
              className="image"
            />
          </ImageBlock>

          <TextBlock>
            <Title>
              Our Team <Underline />
            </Title>
            <Paragraph>
                           Hello! I’m Arjun Mehta, a passionate traveler and storyteller with an endless curiosity for exploring the world. 
                           What started as a single backpacking trip during college quickly turned into a lifelong journey of adventure. 
                           From ancient cities to remote mountain villages, I find joy in uncovering the soul of every place I visit.
            
                        </Paragraph>
                        <Paragraph>
                            Over the years, I’ve traveled to over 30 countries and dozens of cities across India. 
                            My travels have taken me to bustling street markets in Bangkok, peaceful monasteries in Ladakh, and sunset beaches in Bali. 
                           Each destination teaches me something new — not just about the world, but also about myself.
                        </Paragraph>
                        <Paragraph>
                           I created this website to document my experiences and help others discover the joy of travel. 
                           Here, you’ll find practical tips, detailed travel guides, hidden gems, and plenty of inspiration. 
                           Whether you’re planning your first trip or your fiftieth, my goal is to make your journey smoother and more meaningful.
                        </Paragraph>
                        <Paragraph>
                            Beyond traveling, I love photography, local food, and connecting with people from different cultures. 
                            When I’m not exploring new places, I’m writing blog posts, editing photos, or dreaming up my next destination. 
                            Thank you for visiting — and I hope my stories inspire you to explore the world with wonder and purpose.
        </Paragraph>
          </TextBlock>
        </ContentReverse>
      </Container>
    </Section>
  );
};

export default OurTeam;
