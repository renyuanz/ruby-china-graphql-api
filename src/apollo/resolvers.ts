import { Resolvers } from "../generated/graphql";
import { IDataSources } from "./datasources";

const resolvers: Resolvers<{ dataSources: IDataSources }> = {
  Query: {
    topics: (_1, _2, { dataSources }) => dataSources.rubyChinaAPI.getTopics(),
    topic: (_1, args, { dataSources }) =>
      dataSources.rubyChinaAPI.getTopic(args.id),
    me: (_1, _2, { dataSources }) => dataSources.rubyChinaAPI.getHello(),
    nodes: (_1, _2, { dataSources }) => dataSources.rubyChinaAPI.getNodes(),
    node: (_1, args, { dataSources }) =>
      dataSources.rubyChinaAPI.getNode(args.id),
    users: (_1, args, { dataSources }) =>
      dataSources.rubyChinaAPI.getUsers(args.limit || 20),
    // user: (_1, args, { dataSources }) =>
    //   dataSources.rubyChinaAPI.getUser(args.id),
  },
};

export default resolvers;
