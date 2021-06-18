import styled from "styled-components";

export const ProjectsSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10rem;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid var(--primary-color);
  border-width: 0 0 2px 2px;
`;

export const SectionHeadingContainer = styled.div`
  font-size: 2rem;
  color: var(--primary-color);
  border: 2px solid var(--primary-color);
  border-width: 2px 2px 2px 0;
  align-self: flex-start;

  @media (max-width: 500px) {
    font-size: 1.5rem;
  }

  @media (max-width: 300px) {
    font-size: clamp(0.5rem, 0.5rem + 2.6667vw, 1rem);
  }
`;

export const Heading = styled.h1`
  margin: 0;
  padding: 1rem;
`;

export const ProjectsContainer = styled.div`
  padding: 1rem;
`;

export const ViewOtherWorkContainer = styled.div`
  font-size: 1.5rem;
  align-self: center;
  margin-bottom: 1rem;
  cursor: pointer;
  border: 2px solid var(--primary-color);
  padding: 0.5rem;
  border-radius: 10px;

  @media (max-width: 340px) {
    font-size: 1rem;
  }

  @media (max-width: 260px) {
    font-size: 0.75rem;
  }
`;
