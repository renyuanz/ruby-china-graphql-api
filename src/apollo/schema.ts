import { readFileSync } from "fs";
import { resolve } from "path";
import { gql } from "apollo-server-core";

const graphqlString = readFileSync(
  resolve(__dirname, "../../schema/schema.graphql"),
  {
    encoding: "utf8",
  }
);
const typeDefs = gql(graphqlString);

export default typeDefs;
