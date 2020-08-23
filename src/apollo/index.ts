import { ApolloServer } from "apollo-server-fastify";

import typeDefs from "./schema";
import resolvers from "./resolvers";
import dataSources from "./datasources";

export default new ApolloServer({
  typeDefs,
  resolvers,
  dataSources,
  context: ({ request }) => {
    const token = request.headers.authorization || null;
    return { token };
  },
});
