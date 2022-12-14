import { request, gql } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT;

export const getAllProjects = async () => {
  const query = gql`
    query AllProjects {
      projects {
        categoria
        fecha
        projectId
        icons
        src
        link
        name
        desc
        image {
          id
          url(transformation: { document: {} })
        }
        descripcion {
          raw
        }
      }
    }
  `;
  const result = await request(graphqlAPI, query);

  return result.projects;
};
export const getProjectById = async (id) => {
  const query = gql`
    query ProjectById($id: String!) {
      projects(where: { projectId: $id }) {
        categoria
        fecha
        projectId
        icons
        src
        link
        name
        desc
        image {
          id
          url(transformation: { document: {} })
        }
        descripcion {
          raw
        }
      }
    }
  `;
  const result = await request(graphqlAPI, query, { id });

  return result.projects[0];
};
