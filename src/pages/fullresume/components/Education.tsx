import React from "react";
import styled from "styled-components";

const EducationContainer = styled.div`
  display: flex;
  color: var(--on-bg);
  width: 1024px;
  margin-top: 2rem;
  flex-direction: column;
`;

const Education = () => {
  return (
    <EducationContainer>
      <h1>Education</h1>
    </EducationContainer>
  );
};

export default Education;
