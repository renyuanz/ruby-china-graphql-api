import { ApolloServer } from "@saeris/apollo-server-vercel";

import typeDefs from "./schema";
import resolvers from "./resolvers";
import dataSources from "./datasources";

export default new ApolloServer({
  typeDefs,
  resolvers,
  dataSources,
  introspection: true,
  context: ({ req }) => {
    const token = req?.headers?.authorization || null;
    return { token };
  },
});
