import styled from 'styled-components';

// Section wrapper for spacing
export const Section = styled.section`
  padding: 3rem 0;
  background: #fafbfc;
`;

// Main container to center content
export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

// Flex row, reversed for image/text alignment
export const ContentReverse = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  gap: 2.5rem;
  margin-bottom: 3rem;
  @media (max-width: 900px) {
    flex-direction: column-reverse;
    gap: 1.5rem;
  }
`;

// Flex row for normal image/text alignment
export const Content = styled.div`
  display: flex;
  align-items: center;
  gap: 2.5rem;
  margin-bottom: 3rem;
  @media (max-width: 900px) {
    flex-direction: column;
    gap: 1.5rem;
  }
`;

// Wrapper for text blocks
export const TextBlock = styled.div`
  flex: 1;
  min-width: 0;
`;

// Title styling
export const Title = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1.2rem;
  display: flex;
  align-items: center;
`;

// Blue underline used below titles
export const Underline = styled.span`
  display: inline-block;
  width: 60px;
  height: 5px;
  background: #1890ff;
  margin-left: 1rem;
  border-radius: 4px;
`;

// Paragraph styling for content
export const Paragraph = styled.p`
  font-size: 1.15rem;
  margin-bottom: 1rem;
  color: #444;
  line-height: 1.8;
`;

// Image wrapper for consistent sizing and style
export const ImageBlock = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  > img {
    max-width: 100%;
    max-height: 500px;
    border-radius: 18px;
    box-shadow: 0 8px 30px rgba(0,0,0,0.13);
    transition: box-shadow 0.3s;
    background: #fff;
  }
`;