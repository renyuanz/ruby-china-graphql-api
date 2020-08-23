import { ApolloServer } from "apollo-server-fastify";

import typeDefs from "./schema";
import resolvers from "./resolvers";
import dataSources from "./datasources";

export default new ApolloServer({
  typeDefs,
  resolvers,
  dataSources,
  introspection: true,
  context: ({ request }) => {
    const token = request.headers.authorization || null;
    return { token };
  },
});
