import { readFileSync } from "fs";
import { resolve } from "path";
import { gql } from "apollo-server-fastify";

const graphqlString = readFileSync(resolve(__dirname, "./schema.graphql"), {
  encoding: "utf8",
});
const typeDefs = gql(graphqlString);

export default typeDefs;
