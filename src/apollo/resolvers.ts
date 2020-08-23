import { Resolvers } from "../generated/graphql";
import { IDataSources } from "./datasources";

const resolvers: Resolvers<{ dataSources: IDataSources }> = {
  Query: {
    topics: (_1, _2, { dataSources }) => dataSources.topicAPI.getTopics(),
    me: (_1, _2, { dataSources }) => dataSources.meAPI.getTopics(),
  },
};

export default resolvers;
