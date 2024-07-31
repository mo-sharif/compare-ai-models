import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';
import dotenv from 'dotenv';
import { queryAPI } from './services/apiRequest.js';
import { apiConfigs } from './config/apis.js';

dotenv.config();

// Generate type definitions dynamically
const typeDefs = gql`
  type Query {
    ${apiConfigs.map(api => `${api.name}(inputs: String!): JSON`).join('\n')}
  }

  scalar JSON
`;

// Generate resolvers dynamically
const resolvers = {
    Query: apiConfigs.reduce((acc, api) => {
        acc[api.name] = async (_, { inputs }) => {
            return queryAPI(api.url, { inputs });
        };
        return acc;
    }, {}),
};

async function startServer() {
    const app = express();
    const server = new ApolloServer({ typeDefs, resolvers });
    await server.start();
    server.applyMiddleware({ app });

    app.listen({ port: 4000 }, () =>
        console.log(`Server ready at http://localhost:4000${server.graphqlPath}`)
    );
}

startServer();
