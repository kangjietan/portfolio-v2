import styled from "styled-components";

export const AboutSection = styled.section`
  display: flex;
  padding: 2rem;
  padding-bottom: 0;
  justify-content: center;
  align-items: center;
  position: relative;

  @media (max-width: 1100px) {
    padding: 0;
  }
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

  @media (max-width: 500px) {
    font-size: 1.5rem;
  }

  @media (max-width: 300px) {
    font-size: clamp(0.5rem, 0.5rem + 2.6667vw, 1rem);
    letter-spacing: 0;
  }
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

  @media (max-width: 1100px) {
    padding: 1rem 0 0 0;
  }

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

export const ImgContainer = styled.div`
  width: 25rem;
  margin-right: 2rem;
  margin-left: 1rem;

  & > * {
    box-shadow: 0 0 3px 2px var(--secondary-color);
  }

  @media (max-width: 1100px) {
    padding-bottom: 1rem;
  }

  @media (max-width: 900px) {
    width: 20rem;
    padding-bottom: 0;
  }

  @media (max-width: 500px) {
    margin: 0;
    padding: 0 1rem 1rem 1rem;
    width: 75vw;
  }
`;

export const DescriptionContainer = styled.div`
  width: 75%;
  color: var(--on-bg);

  @media (max-width: 900px) {
    width: 100%;
  }
`;

export const Description = styled.p`
  font-size: 1.5rem;

  @media (max-width: 1000px) {
    font-size: 1.25rem;
  }

  @media (max-width: 900px) {
    margin-left: 1rem;
  }

  @media (max-width: 500px) {
    margin: 0;
    padding-left: 1rem;
    font-size: clamp(1rem, 0.25rem + 4vw, 1.5rem);
  }
`;
