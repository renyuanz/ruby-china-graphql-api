import { Resolvers } from "../generated/graphql";
import { IDataSources } from "./datasources";

const resolvers: Resolvers<{ dataSources: IDataSources }> = {
  Query: {
    topics: (root, args, { dataSources }) => dataSources.topicAPI.getTopics(),
    me: (root, args, { dataSources }) => dataSources.meAPI.getTopics(),
  },
};

export default resolvers;
