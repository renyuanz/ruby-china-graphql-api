import { Resolvers } from "../generated/graphql";
import { IDataSources } from "./datasources";

enum TopicType {
  LAST_ACTIVED = "last_actived",
  RECENT = "recent",
  NO_REPLY = "no_reply",
  POPULAR = "popular",
  EXCELLENT = "excellent",
}

enum TopicOrderType {
  RECENT = "recent",
  LIKES = "likes",
  REPLIES = "replies",
}

const resolvers: Resolvers<{ dataSources: IDataSources }> = {
  TopicType,
  TopicOrderType,
  Query: {
    topics: (_1, args, { dataSources }) =>
      dataSources.rubyChinaAPI.getTopics(args),
    topic: (_1, args, { dataSources }) =>
      dataSources.rubyChinaAPI.getTopic(args.id),
    me: (_1, _2, { dataSources }) => dataSources.rubyChinaAPI.getUsersMe(),
    nodes: (_1, _2, { dataSources }) => dataSources.rubyChinaAPI.getNodes(),
    node: (_1, args, { dataSources }) =>
      dataSources.rubyChinaAPI.getNode(args.id),
    users: (_1, args, { dataSources }) =>
      dataSources.rubyChinaAPI.getUsers(args.limit || 20),
    user: (_1, args, { dataSources }) =>
      dataSources.rubyChinaAPI.getUser(args.login),
  },
  UserDetail: {
    replies: (parent, args, { dataSources }) =>
      dataSources.rubyChinaAPI.getUserReplies(parent.login, args),
    topics: (parent, args, { dataSources }) =>
      dataSources.rubyChinaAPI.getUserTopics(parent.login, args),
    blocked: (parent, args, { dataSources }) =>
      dataSources.rubyChinaAPI.getUserBlocked(parent.login, args),
    following: (parent, args, { dataSources }) =>
      dataSources.rubyChinaAPI.getUserFollowing(parent.login, args),
    followers: (parent, args, { dataSources }) =>
      dataSources.rubyChinaAPI.getUserFollowers(parent.login, args),
    favorites: (parent, args, { dataSources }) =>
      dataSources.rubyChinaAPI.getUserFavorites(parent.login, args),
  },
};

export default resolvers;
