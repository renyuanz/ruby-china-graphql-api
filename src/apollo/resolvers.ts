import { Resolvers } from "../generated/graphql";
import { IDataSources } from "./datasources";

enum TopicType {
  LAST_ACTIVED = "last_actived",
  RECENT = "recent",
  NO_REPLY = "no_reply",
  POPULAR = "popular",
  EXCELLENT = "excellent",
}

const resolvers: Resolvers<{ dataSources: IDataSources }> = {
  TopicType,
  Query: {
    topics: (_1, args, { dataSources }) =>
      dataSources.rubyChinaAPI.getTopics(args),
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
