import styled from "styled-components";

export const ContactSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 10rem 0;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid var(--primary-color);
  border-radius: 10px;
  justify-content: center;
  position: relative;
  width: 768px;
  padding: 1rem;

  @media (max-width: 900px) {
    width: 100%;
  }
`;

export const ContentOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background: var(--on-bg);
  width: 100%;
  height: 100%;
  opacity: 7%;
`;

export const SectionHeadingContainer = styled.div`
  font-size: 2.5rem;
  color: var(--primary-color);

  @media (max-width: 500px) {
    font-size: 1.5rem;
  }

  @media (max-width: 300px) {
    font-size: clamp(0.25rem, 0.5rem + 2.6667vw, 1rem);
  }
`;

export const Heading = styled.h1`
  margin: 0;
  padding: 1rem;
`;

export const TextContainer = styled.div`
  font-size: 2rem;
  color: var(--secondary-color);
  align-self: center;

  @media (max-width: 310px) {
    font-size: 1.5rem;
  }

  @media (max-width: 270px) {
    font-size: clamp(0.5rem, 0.5rem + 2.6667vw, 1.25rem);
  }
`;

export const SocialsResumeContainer = styled.div`
  display: flex;
  justify-content: space-around;
  z-index: 2;

  @media (max-width: 450px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const SocialsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  flex-direction: column;
  width: 45%;
  border: 2px solid var(--primary-color);
  border-radius: 10px;
  padding: 1rem 0;

  @media (max-width: 450px) {
    width: 65%;
    margin-bottom: 0.5rem;
  }

  @media (max-width: 350px) {
    width: 80%;
  }

  @media (max-width: 270px) {
    width: 100%;
  }
`;

export const SocialContainer = styled.div`
  color: var(--on-bg);
  font-size: 3rem;
  cursor: pointer;
  padding-left: 1rem;

  &:hover {
    color: var(--secondary-color);
  }

  & svg {
    margin-right: 0.5rem;
  }

  & span {
    font-size: 1.5rem;
  }

  @media (max-width: 800px) {
    font-size: 2.5rem;

    & span {
      font-size: 1.25rem;
    }
  }

  @media (max-width: 550px) {
    font-size: 2rem;

    & span {
      font-size: 1rem;
    }
  }

  @media (max-width: 250px) {
    & a {
      display: flex;
      flex-direction: column;
    }

    & span {
      margin: 0.35rem 0px;
    }
  }
`;

export const ResumeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 45%;
  color: var(--on-bg);
  border: 2px solid var(--primary-color);
  border-radius: 10px;
  padding: 1rem 0.25rem;

  &:hover > * {
    color: var(--secondary-color);
  }

  @media (max-width: 450px) {
    width: 65%;
  }

  @media (max-width: 350px) {
    width: 80%;
  }

  @media (max-width: 270px) {
    width: 100%;
  }
`;

export const ResumeFileSVGContainer = styled.div`
  color: inherit;
  font-size: 3rem;
  cursor: pointer;

  @media (max-width: 800px) {
    font-size: 2.5rem;
  }

  @media (max-width: 550px) {
    font-size: 2rem;
  }
`;

export const ViewResume = styled.div`
  color: inherit;
  cursor: pointer;
  font-size: 1.5rem;
  text-align: center;

  @media (max-width: 800px) {
    font-size: 1.25rem;
  }

  @media (max-width: 550px) {
    font-size: 1rem;
  }
`;
