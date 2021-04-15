import styled from "styled-components";

interface ParallaxProps {
  pageOffset: number;
  direction: string;
  limit: number;
}

const textColor = "#8C8C8C";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0px 150px;
`;

export const ParallaxContainer = styled.div`
  transform: ${(props: ParallaxProps) => {
    const { pageOffset } = props;
    if (pageOffset === 0) return "none";

    return `translateY(-${pageOffset * 0.5}px)`;
  }};
`;

export const BackHomeContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  margin: 1rem;
  cursor: pointer;
  font-size: 1.25rem;
  text-decoration: underline;
`;

export const AboutContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--on-bg);
  max-width: 1440px;
  margin-top: 10rem;

  & p {
    font-size: 1.1rem;
    color: ${textColor};
  }
`;

export const ImageContainer = styled.div`
  width: 25rem;
  margin-right: 1rem;
`;

export const AboutMeContainer = styled.div`
  width: 50%;
`;

export const ExperienceContainer = styled.div`
  display: flex;
  color: var(--on-bg);
  width: 1024px;
  margin-top: 2rem;
  flex-direction: column;
`;

export const Experience = styled.div`
  & h2 {
    font-weight: 400;
  }
`;

export const EducationContainer = styled.div`
  display: flex;
  color: var(--on-bg);
  width: 1024px;
  margin-top: 2rem;
  flex-direction: column;
`;
