import styled from "styled-components";

export const ContactSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 10rem;
  margin-bottom: 2rem;
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
    font-size: clamp(0.5rem, 0.5rem + 2.6667vw, 1rem);
    letter-spacing: 0;
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
`;

export const SocialsResumeContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const SocialsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  flex-direction: column;
  width: 50%;
`;

export const SocialContainer = styled.div`
  color: white;
  font-size: 3rem;

  & svg {
    margin-right: 0.5rem;
  }

  & span {
    font-size: 1.5rem;
  }
`;

export const ResumeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 50%;
`;

export const ResumeFileSVGContainer = styled.div`
  color: white;
  font-size: 3rem;
`;

export const ViewResume = styled.div`
  color: white;
  font-size: 1.5rem;
`;
