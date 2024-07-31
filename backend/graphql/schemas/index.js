import { gql } from 'apollo-server-express';
import { apiConfigs } from '../../config/apis.js';

const typeDefs = gql`
  type Query {
    ${apiConfigs.map(api => `${api.name}(inputs: String!): JSON`).join('\n')}
  }

  scalar JSON
`;

export default typeDefs;
