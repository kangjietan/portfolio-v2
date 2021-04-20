import { useStaticQuery, graphql } from "gatsby";

const useProjectData = () => {
  const data = useStaticQuery(graphql`
    {
      allMdx(
        filter: { fileAbsolutePath: { regex: "/content/" } }
        sort: { fields: [frontmatter___place], order: DESC }
      ) {
        edges {
          node {
            frontmatter {
              title
              github
              site
              tech
              image {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
            excerpt
          }
        }
      }
    }
  `);

  return data.allMdx.edges;
};

export default useProjectData;
