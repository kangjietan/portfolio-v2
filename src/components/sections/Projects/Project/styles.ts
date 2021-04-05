import styled, { css } from "styled-components";

interface ImageContainerProps {
  place: number;
}

interface ProjectContainerProps {
  place: number;
}

interface LinksContainerProps {
  place: number;
}

interface ProjectInformationContainerProps {
  place: number;
}

export const ProjectContainer = styled.div`
  display: flex;
  position: relative;
  color: var(--on-bg);
  padding: 1rem;
  margin: 4rem 1rem;
  justify-content: space-between;
  max-width: 900px;
  width: 900px;
  box-shadow: 0 0 5px var(--primary-color);
  margin-left: ${(props: ProjectContainerProps) =>
    props.place % 2 === 0 ? "10rem" : "1rem"};
  /* transform: ${(props: ProjectContainerProps) =>
    props.place % 2 === 0 ? "translateX(10rem)" : "translateX(1rem)"}; */
`;

export const ProjectOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background: var(--on-bg);
  width: 100%;
  height: 100%;
  opacity: 7%;
`;

export const ImageContainer = styled.div`
  width: 30rem;
  /* height: 15rem; */
  transform: translateY(-3rem);
  /* box-shadow: 0 0 5px var(--primary-color); */
  order: ${(props: ImageContainerProps) => (props.place % 2 === 0 ? 1 : 0)};

  & > * {
    box-shadow: 0 0 5px var(--primary-color);
  }
`;

export const ProjectInformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 2;
  text-align: ${(props: ProjectInformationContainerProps) =>
    props.place % 2 === 0 ? "left" : "right"};
`;

export const ProjectTitle = styled.div`
  font-size: 2rem;
`;

export const LinksContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: ${(props: LinksContainerProps) =>
    props.place % 2 === 0 ? "flex-start" : "flex-end"};
`;

export const GitHubLink = styled.div`
  &:hover {
    color: var(--primary-color);
  }
`;

export const LiveSiteLink = styled.div`
  &:hover {
    color: var(--primary-color);
  }
`;

export const TechContainer = styled.div``;
