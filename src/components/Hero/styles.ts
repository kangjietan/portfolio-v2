import styled from 'styled-components';

export const HeroSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
`;

export const GreetingContainer = styled.div`
  display: flex;
  margin-top: 2rem;
  align-items: flex-end;
`;

export const Greeting = styled.h2`
  color: var(--primary-variant-color);
  font-size: 6rem;
  margin: 0;
  margin-right: 2rem;
`;

export const NameContainer = styled.div``;

export const GreetingDescription = styled.p`
  color: #03DAC6;
  font-size: 4rem;
`;
