import React from "react";

import { Link } from "gatsby";

import styled from "styled-components";

export const Container = styled.div`
  color: var(--on-bg);
  margin-top: 3rem;
  text-align: center;
  font-size: 2rem;

  & > * {
    border: 2px solid var(--primary-color);
    padding: 0.5rem;
    border-radius: 10px;
  }

  @media (max-width: 460px) {
    font-size: clamp(1rem, 0.5rem + 4vw, 1.5rem);
  }

  @media (max-width: 330px) {
    font-size: clamp(0.5rem, 0rem + 4.8vw, 0.9rem);
  }
`;

const FullResume: React.FunctionComponent = () => {
  return (
    <Container>
      <Link to="/fullresume">View Full Resume Page</Link>
    </Container>
  );
};

export default FullResume;
