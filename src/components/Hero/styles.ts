import styled from "styled-components";

export const HeroSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;

  @media (max-width: 1650px) {
    & h2 {
      font-size: 5rem;
    }

    & svg {
      width: 300px;
    }
  }

  @media (max-width: 1500px) {
    & h2 {
      font-size: 4.5rem;
    }

    & p {
      font-size: 3.5rem;
    }

    & svg {
      width: 250px;
      height: 110px;
    }
  }

  @media (max-width: 1350px) {
    & h2 {
      font-size: 4rem;
    }

    & p {
      font-size: 3rem;
    }

    & svg {
      width: 200px;
      height: 90px;
    }
  }

  @media (max-width: 1200px) {
    & h2 {
      font-size: 3.5rem;
    }

    & svg {
      width: 175px;
      height: 80px;
    }
  }

  @media (max-width: 1100px) {
    & h2 {
      font-size: 3rem;
    }

    & svg {
      width: 150px;
      height: 70px;
    }

    & p {
      font-size: 2.75rem;
      margin: 0;
    }
  }

  @media (max-width: 1000px) {
    & svg {
      width: 175px;
      height: 80px;
    }
  }

  @media (max-width: 870px) {
    & h2 {
      font-size: 2.75rem;
    }

    & p {
      font-size: 2.4rem;
    }
  }

  @media (max-width: 700px) {
    & h2 {
      font-size: clamp(1.5rem, 6.5vw, 3.5rem);
    }

    & svg {
      width: 25vw;
      height: 15vw;
    }

    & p {
      font-size: clamp(1rem, -0.875rem + 8vw, 2rem);
    }
  }
`;

export const GreetingContainer = styled.div`
  display: flex;
  margin-top: 2rem;
  align-items: flex-end;
  text-align: center;

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Greeting = styled.h2`
  color: var(--primary-variant-color);
  font-size: 6rem;
  margin: 0;
  margin-right: 2rem;

  @media (max-width: 1000px) {
    margin-right: 0;
  }
`;

export const NameContainer = styled.div``;

export const GreetingDescription = styled.p`
  color: var(--secondary-color);
  font-size: 4rem;
`;
