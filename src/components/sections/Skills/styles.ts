import styled from "styled-components";

export const SkillSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid var(--secondary-color);
  border-width: 0 2px 2px 0;
`;

export const SectionHeadingContainer = styled.div`
  color: var(--secondary-color);
  font-size: 2rem;
  align-self: flex-end;
  border: 2px solid var(--secondary-color);
  border-width: 2px 0 2px 2px;
  /* width: 200px;
  transform:translateX(200px); */
`;

export const Heading = styled.h1`
  margin: 0;
  padding: 1rem;
`;

export const SkillsContainer = styled.div`
  display: flex;
  /* width: 1440px; */
  flex-wrap: wrap;
  /* gap: 1rem; */
  margin-top: 1rem;
  padding: 1rem;
`;

export const SkillOverlay = styled.div`
  
`;

export const SkillContainer = styled.div`
  display: flex;
  flex: 1 0 21%;
  justify-content: center;
  align-items: center;
  color: white;
  flex-direction: column;
  padding: 1rem;
`;

export const SkillName = styled.div`
  font-size: 1.5rem;
`;
