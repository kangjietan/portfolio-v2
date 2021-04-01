import styled from "styled-components";

interface SkillContainerProps {
  color: string;
}

export const SkillsSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10rem;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid var(--primary-color);
  border-width: 0 2px 2px 0;
`;

export const SectionHeadingContainer = styled.div`
  color: var(--primary-color);
  font-size: 2rem;
  align-self: flex-end;
  border: 2px solid var(--primary-color);
  border-width: 2px 0 2px 2px;

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

export const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 1rem;
  padding: 1rem;

  @media(max-width: 550px) {
    width: 90vw;
  }

  @media(max-width: 450px) {
    flex-direction: column;
    width: 75vw;
  }

  @media(max-width: 300px) {
    width: 100%;
  }
`;

export const SkillContainer = styled.div`
  display: flex;
  flex: 1 0 21%;
  justify-content: center;
  align-items: center;
  color: white;
  flex-direction: column;
  padding: 1rem;
  position: relative;
  margin: 1rem;
  border: 2px solid var(--primary-color);

  & svg {
    font-size: 7em;
  }

  &:hover > * {
    color: ${(props: SkillContainerProps) => props.color};
  }

  @media(max-width: 800px) {
    flex: 1 0 33%;
  }

  @media(max-width: 600px) {
    flex: 1 0 21%;
  }
`;

export const SkillName = styled.div`
  font-size: 1.5rem;

  @media (max-width: 1000px) {
    font-size: 1.3rem;
  }

  @media (max-width: 800px) {
    font-size: 1.1rem;
  }
`;

export const SkillOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background: white;
  width: 100%;
  height: 100%;
  opacity: 7%;
`;
