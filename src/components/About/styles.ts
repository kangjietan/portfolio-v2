import styled from "styled-components";

export const AboutSection = styled.section`
  display: flex;
  padding: 2rem;
  padding-bottom: 0;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SectionHeadingContainer = styled.div`
  color: var(--secondary-color);
  font-size: 2rem;
  letter-spacing: 0.25rem;
  align-self: flex-start;
  border: 2px solid var(--secondary-color);
  border-width: 2px 2px;
`;

export const Heading = styled.h1`
  margin: 0;
  padding: 1rem;
`;

export const Container = styled.div`
  display: flex;
  max-width: 1024px;
  padding: 1rem;
  border: 2px solid var(--secondary-color);
  border-width: 0 0 2px 2px;
`;

export const ImgContainer = styled.div`
  width: 25rem;
  margin-right: 2rem;
  margin-left: 1rem;
`;

export const DescriptionContainer = styled.div`
  width: 75%;
  color: var(--on-bg);
`;

export const Description = styled.p`
  font-size: 1.5rem;
`;
