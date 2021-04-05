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

interface TechContainerProps {
  place: number;
}

export const ProjectContainer = styled.div`
  display: flex;
  position: relative;
  color: var(--on-bg);
  padding: 1rem;
  margin: 4rem 1rem;
  justify-content: space-between;
  max-width: 1024px;
  width: 1024px;
  box-shadow: 0 0 5px var(--primary-color);
  margin-left: ${(props: ProjectContainerProps) =>
    props.place % 2 === 0 ? "10rem" : "1rem"};
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
  transform: translateY(-3rem);
  order: ${(props: ImageContainerProps) => (props.place % 2 === 0 ? 1 : 0)};
  z-index: 2;

  & > a * {
    box-shadow: 0 0 5px 1px var(--primary-color);
    cursor: pointer;
  }
`;

export const ProjectInformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 2;
  ${(props: ProjectInformationContainerProps) =>
    props.place % 2 === 0
      ? css`
          text-align: left;
          align-items: flex-start;
        `
      : css`
          text-align: right;
          align-items: flex-end;
        `}
  width: 50%;
`;

export const ProjectTitle = styled.div`
  font-size: 2rem;

  &:hover {
    color: var(--primary-color);
  }
`;

export const LinksContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: ${(props: LinksContainerProps) =>
    props.place % 2 === 0 ? "flex-start" : "flex-end"};
`;

export const GitHubLink = styled.a`
  cursor: pointer;
  &:hover {
    color: var(--primary-color);
  }
`;

export const LiveSiteLink = styled.a`
  cursor: pointer;
  &:hover {
    color: var(--primary-color);
  }
`;

export const TechContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  font-size: 1rem;
  margin-top: 1rem;
  justify-content: ${(props: TechContainerProps) =>
    props.place % 2 === 0 ? "flex-start" : "flex-end"};
  color: var(--primary-color);
  opacity: var(--medium-text-emphasis);
`;

export const ExcerptContainer = styled.div`
  width: 65%;
  opacity: var(--high-text-emphasis);
`;
